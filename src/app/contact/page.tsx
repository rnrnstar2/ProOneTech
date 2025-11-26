 "use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { siteInfo } from "@/lib/site-info"

const contacts = [
  { label: "電話", value: siteInfo.factory.tel, href: siteInfo.factory.telHref },
  { label: "FAX", value: siteInfo.factory.fax },
  { label: "メール", value: siteInfo.email.main, href: siteInfo.email.href },
  { label: "住所", value: `${siteInfo.factory.address}（プロワンテック工場）` },
  { label: "受付時間", value: siteInfo.hours },
]

export const metadata = {
  title: `お問い合わせ | ${siteInfo.brand}`,
  description: "無煙焼却炉に関するご相談・お見積り依頼はこちらから。",
}

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("お名前・メールアドレス・お問い合わせ内容は必須です。")
      return
    }

    const body = [
      `お名前: ${name}`,
      `メール: ${email}`,
      tel ? `電話: ${tel}` : "",
      "",
      "お問い合わせ内容:",
      message,
    ]
      .filter(Boolean)
      .join("\n")

    const mailto = `mailto:${siteInfo.email.main}?subject=${encodeURIComponent("【サイト問い合わせ】" + name)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-slate-900">
      <section className="container py-12 sm:py-16 space-y-6 max-w-5xl">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm border border-blue-300 text-blue-800">
            お問い合わせ
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">ご相談・お見積りの依頼</h1>
              <p className="text-slate-600 text-lg leading-relaxed">
            デモ・図面確認・仕様相談・価格のお問い合わせをお受けしています。フォームまたはお電話（{siteInfo.factory.tel}）でお気軽にご連絡ください。
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button asChild className="rounded-full">
              <a href={siteInfo.factory.telHref}>電話する</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-blue-300 bg-white text-blue-800 hover:bg-blue-100"
            >
              <Link href="/drawing">図面を見る</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">フォームで問い合わせる</CardTitle>
              <p className="text-sm text-slate-600">
                内容を確認後、担当からご連絡いたします。
              </p>
              <p className="text-xs text-slate-500">送信するとメールソフトが起動します。</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-3">
                  <Label htmlFor="name" className="text-slate-900">お名前 *</Label>
                  <Input
                    id="name"
                    placeholder="例）山田 太郎"
                    className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email" className="text-slate-900">メールアドレス *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tel" className="text-slate-900">電話番号</Label>
                  <Input
                    id="tel"
                    type="tel"
                    placeholder="080-xxxx-xxxx"
                    className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-500"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="message" className="text-slate-900">お問い合わせ内容 *</Label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="導入時期や用途などをご記入ください。"
                    className="rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full rounded-full">送信する</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">連絡先・所在地</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700">
                {contacts.map((item) => (
                  <div key={item.label} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                    <p className="text-sm text-slate-600">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-semibold text-slate-900 hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">工場アクセス</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700">
                <p className="text-sm text-slate-600">Googleマップでルートを確認</p>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white bg-white text-blue-800 hover:bg-blue-100"
                >
                  <a href="https://maps.app.goo.gl/pQXoza1D9yESbbVv7" target="_blank" rel="noreferrer">
                    地図を開く
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
