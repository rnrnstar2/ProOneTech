import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, ShoppingCart } from "lucide-react"

interface PageProps {
    params: Promise<{
        id: string
    }>
}

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }))
}

export async function generateMetadata({ params }: PageProps) {
    const { id } = await params
    const product = products.find((p) => p.id === id)

    if (!product) {
        return {
            title: "製品が見つかりません"
        }
    }

    return {
        title: `${product.title} | ProOneTech`,
        description: product.excerpt || `Purchase ${product.title} - High quality incinerator parts from ProOneTech`,
    }
}

export default async function ProductDetailPage({ params }: PageProps) {
    const { id } = await params
    const product = products.find((p) => p.id === id)

    if (!product) {
        notFound()
    }

    // Related products (same category)
    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3)

    return (
        <div className="min-h-screen bg-slate-50/50">
            <div className="container py-6 sm:py-8 px-4 sm:px-6">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/products">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            製品一覧に戻る
                        </Link>
                    </Button>
                </div>

                {/* Product Detail */}
                <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
                    {/* Product Image */}
                    <div className="space-y-4">
                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
                            {product.image && product.image !== '/placeholder.svg' ? (
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-slate-300">
                                    <span className="text-8xl">📦</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <Badge className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-200">
                                {product.category}
                            </Badge>
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">
                                {product.title}
                            </h1>
                        </div>

                        <div className="flex items-baseline gap-4">
                            <span className="text-5xl font-bold text-blue-600">
                                ¥{product.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-muted-foreground">(税込)</span>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">製品詳細</h2>
                            {product.content ? (
                                <div
                                    className="prose prose-slate max-w-none"
                                    dangerouslySetInnerHTML={{ __html: product.content }}
                                />
                            ) : (
                                <p className="text-muted-foreground">
                                    高品質な焼却炉部品です。詳細についてはお問い合わせください。
                                </p>
                            )}
                        </div>

                        <Separator />

                        {/* CTA Buttons */}
                        <div className="space-y-2 sm:space-y-3">
                            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-base sm:text-lg h-12 sm:h-14">
                                <Mail className="mr-2 h-5 w-5" />
                                お問い合わせ
                            </Button>
                            <Button variant="outline" size="lg" className="w-full text-base sm:text-lg h-12 sm:h-14">
                                <Phone className="mr-2 h-5 w-5" />
                                電話で注文
                            </Button>
                        </div>

                        {/* Product Info Cards */}
                        <div className="grid gap-4 sm:grid-cols-3 pt-4">
                            <Card className="border-0 shadow-md">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl mb-1">🚚</div>
                                    <div className="text-sm font-semibold">送料無料</div>
                                    <div className="text-xs text-muted-foreground">一部地域を除く</div>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-md">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl mb-1">✅</div>
                                    <div className="text-sm font-semibold">品質保証</div>
                                    <div className="text-xs text-muted-foreground">1年保証</div>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-md">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl mb-1">📞</div>
                                    <div className="text-sm font-semibold">サポート</div>
                                    <div className="text-xs text-muted-foreground">迅速対応</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">関連製品</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedProducts.map((relatedProduct) => (
                                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                                    <Card className="group overflow-hidden border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                                        <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                                            {relatedProduct.image && relatedProduct.image !== '/placeholder.svg' ? (
                                                <img
                                                    src={relatedProduct.image}
                                                    alt={relatedProduct.title}
                                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-slate-300">
                                                    <span className="text-5xl">📦</span>
                                                </div>
                                            )}
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="font-semibold line-clamp-1 mb-2">{relatedProduct.title}</h3>
                                            <div className="text-xl font-bold text-blue-600">
                                                ¥{relatedProduct.price.toLocaleString()}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
