import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteInfo } from "@/lib/site-info"

const rows: { label: string; value: string | string[] }[] = [
  { label: "販売業者", value: "坂川建設鉱業株式会社" },
  { label: "代表責任者", value: "代表取締役　坂川晃一" },
  { label: "所在地", value: "〒714-1222 岡山県小田郡矢掛町西川面1390-1" },
  { label: "電話番号", value: "0866-84-1311" },
  { label: "電話受付時間", value: "8:00～17:00" },
  { label: "メールアドレス", value: "skk@sakagawa-co.jp" },
  { label: "サイトURL", value: "https://shoukyakuro.sakagawa-co.jp/company/" },
  { label: "販売価格", value: "各商品の紹介ページに記載している価格とします。" },
  { label: "商品代金以外に必要な料金", value: "消費税、送料" },
  { label: "引き渡し時期", value: "ご注文から１ケ月以内に発送します。" },
  {
    label: "お支払い方法とお支払いの時期",
    value: [
      "銀行振込：入金確認後に発送となります。",
      "クレジットカード決済：ご注文時にお支払いが確定します。",
    ],
  },
  {
    label: "返品・交換・キャンセルについて",
    value: [
      "商品発送後の返品・交換・キャンセルには、基本的に対応しておりません。",
      "商品に欠陥がある場合のみ交換が可能ですのでご連絡ください。",
    ],
  },
  { label: "返品期限", value: "商品到着から７日以内にご連絡ください。" },
  {
    label: "返品送料",
    value: [
      "商品に欠陥がある場合は弊社が負担いたします。",
      "それ以外はお客様のご負担となります。",
    ],
  },
]

export const metadata = {
  title: `特定商取引法に基づく表記 | ${siteInfo.brand}`,
  description: `${siteInfo.company}（${siteInfo.brand}）の特定商取引法に基づく表記。`,
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <section className="container py-12 sm:py-16 space-y-8 max-w-5xl">
        <div className="space-y-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-3 py-1 rounded-full">
            法定表示
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">特定商取引法に基づく表記</h1>
          <p className="text-slate-200 text-lg leading-relaxed">
            プロワンテック（坂川建設鉱業株式会社）の販売事業に関する情報を掲載しています。
          </p>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-white">事業者情報と取引条件</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 rounded-xl border border-white/10 bg-white/5 p-4 sm:grid-cols-[180px,1fr] sm:items-start"
              >
                <p className="text-sm font-semibold text-slate-200">{row.label}</p>
                <div className="text-sm text-slate-100 leading-relaxed space-y-1">
                  {Array.isArray(row.value) ? (
                    row.value.map((v) => <p key={v}>{v}</p>)
                  ) : (
                    <p>{row.value}</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
