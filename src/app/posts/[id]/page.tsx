import { posts } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"

interface PageProps {
    params: Promise<{
        id: string
    }>
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        id: post.id,
    }))
}

export default async function PostPage({ params }: PageProps) {
    const { id } = await params
    const post = posts.find((p) => p.id === id)

    if (!post) {
        notFound()
    }

    return (
        <article className="min-h-screen bg-white pb-20">
            {/* Header/Cover */}
            <div className="relative h-[40vh] w-full bg-gradient-to-br from-blue-50 via-white to-white">
                {post.image ? (
                    <>
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/85" />
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-500">
                        <span className="text-6xl">📝</span>
                    </div>
                )}

                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 lg:p-16">
                    <div className="container mx-auto max-w-4xl">
                        <Button variant="outline" size="sm" className="mb-6 border-blue-300 text-blue-800 hover:bg-blue-50" asChild>
                            <Link href="/blog">
                                <ArrowLeft className="mr-2 h-4 w-4" /> ブログ一覧に戻る
                            </Link>
                        </Button>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-0">
                                {post.category}
                            </Badge>
                            <div className="flex items-center text-slate-700 text-sm">
                                <Calendar className="mr-1 h-3 w-3" />
                                {new Date(post.date).toLocaleDateString()}
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-3xl py-12 sm:py-16">
                <div
                    className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-800"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </article>
    )
}
