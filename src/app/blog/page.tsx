import { posts } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { siteInfo } from "@/lib/site-info"

export const metadata = {
    title: `ブログ | ${siteInfo.brand}`,
    description: `${siteInfo.brand}焼却炉ソリューションの最新ニュースと情報。`,
}

export default function BlogPage() {
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <div className="min-h-screen bg-slate-50/50">
            <div className="container py-8 sm:py-12">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight lg:text-6xl mb-4 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                        ニュース・ブログ
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        {siteInfo.brand}の最新情報、ニュース、インサイトをお届けします。
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {sortedPosts.map((post) => (
                        <Card
                            key={post.id}
                            className="group flex flex-col overflow-hidden border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Post Image */}
                            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                                {post.image ? (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-slate-400">
                                        <span className="text-5xl">📝</span>
                                    </div>
                                )}
                                <div className="absolute top-3 right-3">
                                    <Badge className="bg-white/90 text-black hover:bg-white shadow-sm backdrop-blur-sm">
                                        {post.category}
                                    </Badge>
                                </div>
                            </div>

                            {/* Post Content */}
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('ja-JP', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                </div>
                                <CardTitle className="line-clamp-2 text-xl leading-tight">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="flex-1">
                                {post.excerpt ? (
                                    <p className="line-clamp-3 text-sm text-muted-foreground">
                                        {post.excerpt}
                                    </p>
                                ) : (
                                    <p className="line-clamp-3 text-sm text-muted-foreground">
                                        この記事を読んで、最新情報について詳しく学びましょう。
                                    </p>
                                )}
                            </CardContent>

                            <CardFooter className="pt-0">
                                <Button
                                    variant="link"
                                    className="px-0 text-blue-600 font-semibold h-auto"
                                    asChild
                                >
                                    <Link href={`/posts/${post.id}`}>
                                        記事を読む <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* No Posts Message */}
                {sortedPosts.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="rounded-full bg-slate-100 p-6 mb-4">
                            <span className="text-4xl">📝</span>
                        </div>
                        <h3 className="text-xl font-semibold">投稿がありません</h3>
                        <p className="text-muted-foreground mt-2">
                            {siteInfo.brand}の更新情報をお待ちください。
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
