import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteInfo } from "@/lib/site-info"

const facts = [
  { label: "社名", value: siteInfo.company },
  { label: "創業", value: "昭和48年3月" },
  { label: "代表取締役社長", value: "坂川晃一" },
  { label: "資本金", value: "3,000万円" },
  { label: "従業員数", value: "25名（2020年2月時点）" },
  {
    label: "事業内容",
    value:
      "土木、舗装、水道、解体、運送、産業廃棄物中間処理、造園、資材販売、リフォーム、薪・薪ストーブ、農業資材販売、焼却炉製造販売",
  },
  { label: "公式サイト", value: "http://sakagawa-co.jp", href: "http://sakagawa-co.jp" },
  { label: "メール", value: siteInfo.email.main, href: siteInfo.email.href },
  { label: "電話受付時間", value: siteInfo.hours },
]

const offices = [
  {
    title: "本社",
    name: "坂川建設鉱業株式会社 本社",
    address: "〒714-1405 岡山県井原市美星町宇戸 1055番地",
    tel: "0866-87-2626",
    fax: "0866-87-2627",
    map: "https://www.google.com/maps?q=34.684443,133.579491",
  },
  {
    title: "矢掛営業所",
    name: "坂川建設鉱業株式会社 矢掛営業所",
    address: "〒714-1227 岡山県小田郡矢掛町小田 5145番地",
    tel: "0866-84-8750",
    fax: "0866-84-8860",
    map: "https://www.google.com/maps?q=34.60754,133.54723",
  },
  {
    title: "プロワンテック（焼却炉工場）",
    name: "坂川建設鉱業株式会社 プロワンテック",
    address: siteInfo.factory.address,
    tel: siteInfo.factory.tel,
    fax: siteInfo.factory.fax,
    map: "https://maps.app.goo.gl/pQXoza1D9yESbbVv7",
  },
]

export const metadata = {
  title: `企業情報 | ${siteInfo.brand}`,
  description: `${siteInfo.company}（${siteInfo.brand}）の会社概要と拠点情報。`,
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/odajimusyo.jpeg"
            alt={`${siteInfo.brand} オフィス外観`}
            className="h-full w-full object-cover opacity-25 scale-105 blur-[2px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/55 to-white" />
        <div className="container relative z-10 py-16 sm:py-20 lg:py-24 space-y-6 max-w-5xl">
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1 rounded-full">
            企業情報
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
            {siteInfo.company}（{siteInfo.brand}）
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            無煙焼却炉「ベストファイヤー」を製造するプロワンテックは、坂川建設鉱業株式会社の焼却炉事業部です。
            土木・解体から産業廃棄物処理まで幅広い事業で培った技術をもとに、安心・安全な焼却ソリューションを提供しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50">
              <Link href="/drawing">図面を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className="container py-12 sm:py-16 space-y-10 max-w-5xl">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold">会社概要</h2>
            <p className="text-muted-foreground">焼却炉製造の背景にある会社プロフィールをまとめました。</p>
          </div>
          <div className="grid gap-4">
            {facts.map((item) => (
              <Card key={item.label} className="border-slate-200">
                <CardContent className="py-4 px-4 sm:px-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm font-semibold text-slate-500">{item.label}</span>
                  {item.href ? (
                    <Link href={item.href} className="text-blue-600 hover:underline font-medium">
                      {item.value}
                    </Link>
                  ) : (
                    <span className="text-base font-semibold text-slate-900">{item.value}</span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container py-12 sm:py-16 space-y-8 max-w-6xl">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-slate-900">拠点・アクセス</h3>
            <p className="text-muted-foreground">本社・営業所・工場の所在地と連絡先です。</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {offices.map((office) => (
              <Card key={office.title} className="h-full border-slate-200">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100">
                      {office.title}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{office.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-700">
                  <p className="leading-relaxed whitespace-pre-line">{office.address}</p>
                  <div className="space-y-1">
                    <div>
                      <span className="font-semibold">TEL：</span>
                      <a href={`tel:${office.tel}`} className="text-blue-600 hover:underline">
                        {office.tel}
                      </a>
                    </div>
                    <div>
                      <span className="font-semibold">FAX：</span>
                      <span>{office.fax}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a href={office.map} target="_blank" rel="noreferrer">
                      Googleマップで開く
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
