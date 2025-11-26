"use client"

import { useState } from "react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("all")

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === "all" || product.category === category

        return matchesSearch && matchesCategory
    })

    const categories = Array.from(new Set(products.map((p) => p.category)))

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
            <div className="container py-8 sm:py-12">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6 mb-8 md:mb-12">
                    <div className="space-y-3">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">製品一覧</h1>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
                            高品質な焼却炉部品と設備をご覧ください
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center w-full md:w-auto">
                        <div className="relative w-full sm:w-[300px]">
                            <Input
                                placeholder="製品を検索..."
                                className="w-full pl-4 h-12 rounded-full border-blue-200 focus:border-blue-500"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className="w-full sm:w-[200px] h-12 rounded-full">
                                <SelectValue placeholder="カテゴリ" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">すべてのカテゴリ</SelectItem>
                                {categories.map((cat) => (
                                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <Card key={product.id} className="group flex flex-col overflow-hidden border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 bg-white">
                            <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                                {product.image && product.image !== '/placeholder.svg' ? (
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-slate-300">
                                        <span className="text-5xl">📦</span>
                                    </div>
                                )}
                                <div className="absolute top-3 right-3">
                                    <Badge className="bg-white/90 text-black hover:bg-white shadow-sm backdrop-blur-sm">
                                        {product.category}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader className="pb-2">
                                <CardTitle className="line-clamp-1 text-xl">{product.title}</CardTitle>
                                <div className="text-2xl font-bold text-primary">
                                    ¥{product.price.toLocaleString()}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 pb-2">
                                {/* Content is empty in XML, so we omit description or show a placeholder if needed */}
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Button className="w-full rounded-full font-semibold text-base" size="lg" asChild>
                                    <Link href={`/products/${product.id}`}>
                                        詳細を見る
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="rounded-full bg-slate-100 p-6 mb-4">
                            <span className="text-4xl">🔍</span>
                        </div>
                        <h3 className="text-xl font-semibold">製品が見つかりません</h3>
                        <p className="text-muted-foreground mt-2 mb-6">
                            検索条件やフィルターを調整してください
                        </p>
                        <Button variant="outline" onClick={() => { setSearch(""); setCategory("all"); }}>
                            フィルターをクリア
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
