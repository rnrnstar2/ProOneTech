import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const resourceLinks = [
  {
    title: "図面",
    description: "外形図・内部構造の確認はこちら",
    href: "/drawing",
    accent: "設計資料",
  },
  {
    title: "本体仕様",
    description: "主要寸法・材質・特徴を一覧で把握",
    href: "/specification",
    accent: "スペック",
  },
  {
    title: "取扱説明",
    description: "安全に使うための手順とチェックポイント",
    href: "/instruction",
    accent: "安全運転",
  },
  {
    title: "企業情報",
    description: "製造元の坂川建設鉱業株式会社について",
    href: "/company",
    accent: "会社概要",
  },
]

const highlights = [
  { label: "焼却能力", value: "約29kg/h" },
  { label: "炉内容積", value: "0.498 m³" },
  { label: "全高", value: "5,040 mm" },
  { label: "素材", value: "鋼板 + 耐火レンガ/キャスタブル" },
]

export const metadata = {
  title: "焼却炉概要 | ProOneTech",
  description: "高性能・無煙焼却炉の概要と資料リンクをまとめました。",
}

export default function SummaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/焼却炉-プレゼンテーション（169）.gif"
            alt="ProOneTech 焼却炉プレゼンテーション"
            className="h-full w-full object-cover opacity-30 blur-[1px] scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900" />
        <div className="container relative z-10 py-16 sm:py-20 lg:py-24 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-blue-500/15 px-4 py-2 text-blue-200 border border-blue-400/30 backdrop-blur-sm">
            <span className="text-sm font-semibold">煙を抑える多段燃焼設計</span>
          </div>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              焼却炉概要
              <span className="block text-blue-200 text-2xl sm:text-3xl font-semibold mt-3">
                ベストファイヤー HBF601-BL-Ⅱ 型
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
              燃焼効率と安全性を両立した無煙焼却炉。高温燃焼と強制送風で黒煙を抑え、環境配慮と扱いやすさを兼ね備えています。
              主要情報へのショートカットをまとめました。
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/products">製品を見る</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Card key={item.label} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-sm text-blue-100 font-semibold">{item.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-white">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource links */}
      <section className="bg-white text-slate-900">
        <div className="container py-12 sm:py-16 space-y-8">
          <div className="space-y-2 text-center">
            <Badge variant="secondary" className="rounded-full px-3 py-1">資料まとめ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">必要な情報をワンクリックで</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              図面・仕様・取扱説明・会社情報をセクションごとにまとめています。
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resourceLinks.map((item) => (
              <Card key={item.title} className="h-full border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs font-semibold">{item.accent}</Badge>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  <Button asChild variant="link" className="px-0 text-blue-600">
                    <Link href={item.href}>詳しく見る →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature bullets */}
      <section className="bg-slate-900">
        <div className="container py-14 sm:py-16 space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">ベストファイヤーの特徴</h3>
              <p className="text-slate-300 mt-2">
                現場で求められる安全性・耐久性・操作性を高い次元で統合しました。
              </p>
            </div>
            <Button asChild className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
              <Link href="/specification">仕様を詳しく見る</Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "多段燃焼 + 強制送風",
                desc: "二次・三次燃焼室と送風ブロアで煙を抑制し、クリーンな排気を実現。",
              },
              {
                title: "耐久性の高い炉材",
                desc: "耐火レンガ・耐火キャスタブル（耐火温度1300°C）で長寿命を実現。",
              },
              {
                title: "オートストップ制御",
                desc: "設定温度（100℃）になると送風・ブロアーが自動停止し、安心運用。",
              },
              {
                title: "メンテナンス性",
                desc: "フレームアイ清掃や灰出しが容易で、日常点検をシンプルに。",
              },
              {
                title: "再投入オプション",
                desc: "二重扉仕様なら燃焼中の安全な再投入が可能（オプション）。",
              },
              {
                title: "多用途対応",
                desc: "木材・紙・繊維から廃プラまで、発熱量を考慮した焼却が可能。",
              },
            ].map((item) => (
              <Card key={item.title} className="h-full border-slate-800 bg-slate-800/40">
                <CardHeader>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
