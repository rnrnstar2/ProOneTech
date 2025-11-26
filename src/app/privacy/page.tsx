import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteInfo } from "@/lib/site-info"

const items: { title: string; body: string | string[] }[] = [
  {
    title: "基本方針",
    body: `${siteInfo.company}（${siteInfo.brand}）は、個人情報の保護に関する法令を遵守し、適切に管理します。`,
  },
  {
    title: "取得する情報",
    body: [
      "お問い合わせフォームで入力いただく氏名、メールアドレス、電話番号、問い合わせ内容",
      "アクセス解析に伴うクッキー情報（ブラウザ設定で無効化可能）",
    ],
  },
  {
    title: "利用目的",
    body: [
      "問い合わせ対応、資料送付、見積もり・デモのご案内",
      "サービス改善のための利用状況の把握（統計データは個人を特定しません）",
    ],
  },
  {
    title: "第三者提供",
    body: "法令に基づく場合を除き、ご本人の同意なく第三者へ提供しません。",
  },
  {
    title: "安全管理",
    body: "不正アクセス・漏えい防止のため、必要な安全管理措置を講じます。",
  },
  {
    title: "開示・訂正・利用停止",
    body: "ご本人からの開示・訂正・利用停止の請求には、法令に基づき速やかに対応します。",
  },
  {
    title: "お問い合わせ窓口",
    body: [
      siteInfo.company,
      siteInfo.factory.address,
      `TEL: ${siteInfo.factory.tel}`,
      `MAIL: ${siteInfo.email.main}`,
      `受付時間: ${siteInfo.hours}`,
    ],
  },
  {
    title: "改定",
    body: "本ポリシーは必要に応じて改定する場合があります。重要な変更がある場合は本サイトでお知らせします。",
  },
]

export const metadata = {
  title: `プライバシーポリシー | ${siteInfo.brand}`,
  description: `${siteInfo.brand}のプライバシーポリシー。取得情報と利用目的、第三者提供、安全管理について記載しています。`,
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-slate-900">
      <section className="container py-12 sm:py-16 space-y-8 max-w-4xl">
        <div className="space-y-3">
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1 rounded-full">
            プライバシー
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">プライバシーポリシー</h1>
          <p className="text-slate-600 leading-relaxed">
            {siteInfo.company}（{siteInfo.brand}）はお客様の個人情報を適切に取り扱い、安全管理に努めます。
          </p>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">個人情報の取り扱い</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {items.map((item) => (
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
