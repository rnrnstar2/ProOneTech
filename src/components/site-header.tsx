"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function SiteHeader() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* ロゴ */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-xl md:text-2xl">
                        ProOneTech
                    </span>
                </Link>

                {/* デスクトップナビゲーション */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <Link
                        href="/products"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        製品一覧
                    </Link>
                    <Link
                        href="/blog"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        ニュース
                    </Link>
                    <Link
                        href="/#about"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        会社概要
                    </Link>
                </nav>

                {/* CTAボタン (デスクトップ) */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="ghost" asChild>
                        <Link href="/#contact">お問い合わせ</Link>
                    </Button>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <Link href="/products">製品を見る</Link>
                    </Button>
                </div>

                {/* モバイルメニュー */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">メニューを開く</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle>メニュー</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-8">
                                <Link
                                    href="/products"
                                    className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-slate-100 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    製品一覧
                                </Link>
                                <Link
                                    href="/blog"
                                    className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-slate-100 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    ニュース
                                </Link>
                                <Link
                                    href="/#about"
                                    className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-slate-100 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    会社概要
                                </Link>
                                <div className="border-t pt-4 mt-2 space-y-2">
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href="/#contact" onClick={() => setOpen(false)}>
                                            お問い合わせ
                                        </Link>
                                    </Button>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                        <Link href="/products" onClick={() => setOpen(false)}>
                                            製品を見る
                                        </Link>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
