import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteInfo } from "@/lib/site-info"

const sections: { title: string; body: string | string[] }[] = [
  {
    title: "適用範囲",
    body: `${siteInfo.brand}（${siteInfo.company}）が提供する本サイトおよび関連サービスに適用されます。`,
  },
  {
    title: "禁止事項",
    body: [
      "法令または公序良俗に反する行為",
      "当社または第三者の権利・利益を侵害する行為",
      "不正アクセスやサービスの運営を妨害する行為",
      "虚偽の情報を提供する行為",
    ],
  },
  {
    title: "免責事項",
    body: [
      "当社は、提供情報の正確性・最新性を保証するものではありません。",
      "本サイトの利用により生じた損害について、当社は責任を負いません。",
      "やむを得ない理由により、事前の通知なく内容を変更・中断・終了する場合があります。",
    ],
  },
  {
    title: "知的財産権",
    body: [
      "本サイトに掲載されるテキスト・画像・ロゴ等の著作権・商標権は当社または正当な権利者に帰属します。",
      "無断転載・複製・改変を禁止します。",
    ],
  },
  {
    title: "リンクについて",
    body: "本サイトへのリンクは、違法・公序良俗に反しない範囲で認めます。リンクによって生じたトラブルについて当社は責任を負いません。",
  },
  {
    title: "個人情報の取り扱い",
    body: [
      "個人情報の取得・利用目的等はプライバシーポリシーに従います。",
      "詳細はプライバシーポリシーをご確認ください。",
    ],
  },
  {
    title: "準拠法・裁判管轄",
    body: [
      "本規約は日本法に準拠します。",
      "本サイトに起因する紛争は、当社所在地を管轄する裁判所を専属的合意管轄とします。",
    ],
  },
]

export const metadata = {
  title: `利用規約 | ${siteInfo.brand}`,
  description: `${siteInfo.brand}（${siteInfo.company}）が提供する本サイトの利用条件を定める規約です。`,
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-slate-900">
      <section className="container py-12 sm:py-16 space-y-8 max-w-4xl">
        <div className="space-y-3">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 px-3 py-1 rounded-full">
            利用規約
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">利用規約</h1>
          <p className="text-slate-600 leading-relaxed">
            本規約は、{siteInfo.brand}（{siteInfo.company}）が提供する本サイトおよび関連サービスの利用条件を定めるものです。
          </p>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">ご利用にあたって</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sections.map((item) => (
              <div key={item.title} className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-1">
                  {Array.isArray(item.body) ? item.body.map((b) => <p key={b}>{b}</p>) : <p>{item.body}</p>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
