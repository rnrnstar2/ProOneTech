import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { siteInfo } from "@/lib/site-info"

export function SiteFooter() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-white text-slate-700">
            <div className="container py-12 md:py-16">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* 会社情報 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">{siteInfo.company}（{siteInfo.brand}）</h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                            無煙焼却炉「ベストファイヤー」を製造するプロワンテック事業部。環境に優しく効率的な廃棄物管理ソリューションを提供します。
                        </p>
                    </div>

                    {/* クイックリンク */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">クイックリンク</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/summary" className="transition-colors hover:text-blue-600">
                                    焼却炉概要
                                </Link>
                            </li>
                            <li>
                                <Link href="/specification" className="transition-colors hover:text-blue-600">
                                    本体仕様
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="transition-colors hover:text-blue-600">
                                    製品一覧
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="transition-colors hover:text-blue-600">
                                    ニュース・ブログ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="transition-colors hover:text-blue-600">
                                    お問い合わせ
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal" className="transition-colors hover:text-blue-600">
                                    特定商取引法
                                </Link>
                            </li>
                            <li>
                                <Link href="/drawing" className="transition-colors hover:text-blue-600">
                                    図面
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 製品カテゴリ */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">製品カテゴリ</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/products" className="transition-colors hover:text-blue-600">
                                    焼却炉部品
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="transition-colors hover:text-blue-600">
                                    煙突システム
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="transition-colors hover:text-blue-600">
                                    アクセサリー
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* お問い合わせ先 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">お問い合わせ</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                                <span>{siteInfo.factory.address}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 flex-shrink-0 text-blue-500" />
                                <a href={siteInfo.factory.telHref} className="transition-colors hover:text-blue-600">
                                    {siteInfo.factory.tel}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 flex-shrink-0 text-blue-500" />
                                <a href={siteInfo.email.href} className="transition-colors hover:text-blue-600">
                                    {siteInfo.email.main}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-4 w-4 flex-shrink-0 text-blue-500 mt-0.5">🕒</span>
                                <span>{siteInfo.hours}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8 bg-slate-200" />

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-sm">
                        © {currentYear} {siteInfo.company}（{siteInfo.brand}）. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm">
                        <Link href="/privacy" className="transition-colors hover:text-blue-600">
                            プライバシーポリシー
                        </Link>
                        <Link href="/legal" className="transition-colors hover:text-blue-600">
                            特定商取引法
                        </Link>
                        <Link href="/terms" className="transition-colors hover:text-blue-600">
                            利用規約
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
