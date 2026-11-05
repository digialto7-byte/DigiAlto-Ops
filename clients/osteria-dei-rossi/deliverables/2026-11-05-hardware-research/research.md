# Osteria Dei Rossi: label printer and HACCP temperature sensor research

Prepared 2026-11-05 (internal, English). Research only; nothing bought, no accounts created.

**Method and limits.** WebSearch only. WebFetch could not resolve `www.amazon.it` or
`support.brother.com` from this sandbox; those hosts must be allowed in the session network
settings for direct page reads. Prices below come from search snippets of retailer pages; the
snippets do not show when each price was captured, so treat every price as "seen in search on
2026-11-05, capture date unknown". Amazon.it prices were found only for the Brother QL-820NWB(c);
every other Amazon.it price is **unverified** and an EU/Italian retailer price is given instead.

---

## Part A: Label printers

### Why AirPrint matters
iOS Safari has no Web Bluetooth/WebUSB, and a Vercel-hosted app cannot open a raw socket to a
printer on the restaurant LAN. The only no-bridge path that works from iPhone **and** Android is:
the app renders a label-sized page or PDF, then the OS print dialog sends it (AirPrint on iOS;
Android print service / Mopria on Android). So AirPrint support is the main filter.

### Comparison

| Printer | Price seen | Connectivity | AirPrint / Android | Web SDK / API | Verdict |
|---|---|---|---|---|---|
| **Brother QL-820NWBc** (62 mm, 300 dpi, black/red) | Amazon.it €196.99 (QL-820NWBcVM), €230.48 (sold by Amazon), €266.96 (QL820NWB older SKU) [1]; Trovaprezzi from €188.88 [1] | Wi-Fi, Ethernet, Bluetooth, USB, Wireless Direct [2][3] | AirPrint yes (retailers, Best Buy, SHI) [2]; Android via Brother Print Service Plugin [9]; Mopria certification **unverified** [8] | Native iOS/Android SDKs only; no browser SDK found | **Primary** |
| **Brother QL-810Wc** (62 mm) | Unieuro €129 (QL-810W), PcComponentes €159.99, Bechtle €110.99–133.99 [4]; Amazon.it **unverified** | Wi-Fi, Wi-Fi Direct, USB; **no Ethernet** [5] | AirPrint yes (Brother product page) [5] | Same as above | **Budget** |
| Brother QL-1110NWBc (up to ~102 mm) | Bechtle €210.99, LDLC €299.95 [6]; Amazon.it **unverified** | Wi-Fi, Ethernet, Bluetooth, USB [6] | AirPrint yes [6] | Same | Only if labels > 62 mm wide are needed |
| Brother TD-2350D (D203/D300) | US $418.69, CAD 738 [7]; Italy **unverified** | USB-C, Ethernet, Wi-Fi, Bluetooth [7] | AirPrint listed by resellers [7] (confirm with Brother) | — | Industrial, overkill for one osteria |
| Zebra ZD421d Wi-Fi/BT (ZD4A042-D0EW02EZ) / ZD411d | ZD421d: €587.37 incl. VAT (Snapweb IT), €444.36 (eBay DE) [10]; ZD411: €423–583 (Bechtle IT) [11] | USB, BT, Wi-Fi or Ethernet by SKU [10][11] | **No AirPrint** (third-party report citing a Zebra engineer; IPP added only for Windows/CUPS in Link-OS 7.4) [12]; iOS only via Zebra app or native Link-OS SDK [12] | Browser Print = desktop app (Win/Mac/Linux), no iOS client [13]; Weblink = printer opens a WebSocket to *your* server [13] | Not a fit: needs a persistent WebSocket server (not Vercel serverless) or a local bridge |
| DYMO LabelWriter 550 / 5XL | not checked on Amazon.it | 550: USB only; 5XL: USB + **wired** Ethernet, no Wi-Fi [14][15] | No AirPrint found [14][15] | DYMO Connect desktop/app | Not a fit: no AirPrint, and 550-series rolls carry an NFC/RFID chip that locks the printer to DYMO labels [16] |
| Niimbot B21 / Phomemo M110 | Niimbot B21 ~€60 (Amazon deal, Tom's HW), ~€73 (Smartworld review) [17]; Phomemo Amazon.it **unverified** | Bluetooth only | No AirPrint; proprietary apps | Community Web Bluetooth libraries only (niimbot-web-bluetooth, niimblue): Chrome/Edge only, **no Safari/iOS** [18] | Not a fit for iPhone staff |

### Label media and cold use
- Brother DK-11209 (29×62 mm die-cut, 800 labels): ~€13–13.69 per roll [19] → about **€0.016/label**
  (Amazon.it price unverified). DK-22205 62 mm × 30.48 m continuous paper: roll price in Italy not
  found [20]; cost per label depends on the cut length (**unverified**).
- All QL/DYMO/Niimbot media is **direct thermal**. Brother says DK film labels were unaffected at
  −80 °C and +80 °C, but also that DK labels are "not designed for durable, permanent labelling".
  An independent UK test found the print survived but the **adhesive of Brother direct-thermal
  paper labels failed on thawing** [21]. For freezer/blast-chiller items use **DK film** rolls or
  freezer-grade compatible labels, apply them before freezing, and test a roll first. Direct
  thermal fades with heat/light; fine for shelf life of days–weeks.

### Known integration risks (Brother via AirPrint)
- Apple Community: QL-820NWBc printed labels ~6× too large via AirPrint after iPadOS 18.0.1 [22].
- Brother FAQ (QL-1110NWB): the loaded roll size may not match the size shown in the AirPrint
  paper list [23]. Scaling must be "actual size / 100 %"; "fit to page" breaks alignment [23].
- Android: the Brother Print Service Plugin is needed so the QL appears as a system printer;
  the label size selected must match the loaded roll [9].
→ Plan a hardware test on a real iPhone and Android phone before committing.

### Recommendation
- **Primary: Brother QL-820NWBc** (~€197–267 on Amazon.it [1]). AirPrint + Ethernet (wire it to
  the router so it never drops Wi-Fi), 62 mm DK die-cut and continuous rolls, red/black option for
  allergens. Use DK film or freezer-grade labels for frozen items.
- **Budget: Brother QL-810Wc** (~€111–160 at Italian/EU retailers [4]). Same media and AirPrint,
  Wi-Fi only.
- Avoid Zebra (no AirPrint, web paths need a bridge or WebSocket server), DYMO (no AirPrint, chipped
  labels) and Niimbot/Phomemo (Bluetooth app-only, no iOS web path).

---

## Part B: Temperature sensors (HACCP)

### Key physics/regulatory points
- Battery electronics inside a freezer are at or past their rated limit: Shelly H&T Gen3 0–40 °C
  [24]; SwitchBot Outdoor Meter −20 °C operating floor [30]; Aqara T&H −20 °C [33]; Inkbird
  IBS-TH5-WiFi 0–50 °C [35]. For freezers and blast chillers use **a probe on a cable with the
  electronics outside**.
- DS18B20 probes (used by Shelly and UbiBot): range −55…+125 °C, **±0.5 °C only from −10 to
  +85 °C, ±2 °C over the full range** [28]. At −18 °C the guaranteed tolerance is ±2 °C.
- No consumer sensor below ships with a calibration certificate. Practical mitigation: one
  certified reference logger (e.g. testo 174 T, "HACCP, EN 12830" certified, from ~€99 [37]) to
  check the sensors periodically (**suggestion, not a legal requirement found**).

### Comparison

| Option | Price seen | Freezer? | Accuracy / cert | Path to our app | Interval | Wi-Fi down | Cloud account / API terms |
|---|---|---|---|---|---|---|---|
| **Shelly 1 Gen3 + Shelly Plus Add-on + DS18B20 probes** | Shelly 1 Gen3 €12.60 (list €14), Plus Add-on €11.90 (list €17) on shelly.com/it [26]; DS18B20 probe €3.75 [27]; Amazon.it **unverified** | Yes: probe inside, relay outside (device −20…40 °C [26]) | DS18B20 ±0.5 °C (±2 °C at −18 °C) [28]; no certificate | **Push from device**: Gen2+ webhooks to an HTTPS URL with tokens like `?tC=${ev.tC}` (CA-signed cert needed, URL ≤300 chars) [25]; or a device script `Timer.set` + `HTTP.POST` for a fixed heartbeat [29] | Our choice (e.g. 1–5 min via script) [29] | No buffering found → gaps; app must alarm on missing data | None required (local webhooks). Shelly Cloud API optional, ~1 req/s (third-party figure) [31] |
| Shelly H&T Gen3 (battery) | €22.80–44.99 (Shelly IT, Unieuro) [32] | **No**, 0–40 °C [24] | not stated | Webhooks (10 hooks × 2 URLs) [24] | change ≥0.5 °C, else every 2 h [24] | No buffer found | Optional | 
| **SwitchBot Outdoor Meter (W3400010) + Hub Mini** | Outdoor Meter ~€16.99, Hub Mini ~€35 (eu.switch-bot.com listing, ambiguous) [34]; Hub Mini Matter €69.90 [34] | Fridge yes; freezer borderline (−20 °C floor) [30]; not blast chiller | not stated | **Push**: official API v1.1 webhook; Outdoor Meter, Meter Pro listed as webhook-capable [36] | ~10 min on older meters per user report (unverified) [38] | Stores 68 days on device (Outdoor Meter / Meter Pro) [39], but webhook won't backfill (**unverified**) | SwitchBot account + token; 10,000 API calls/day [40] |
| **UbiBot WS1 Pro + DS18B20 probe** | $89.99 (official store, inconsistent pages), €103.25 ex VAT (Botland, discontinued listing) [41]; Amazon.it **unverified** | Yes via probe (2 probe ports) [42] | DS18B20 as above; FDA CFR21 claim unverified [42] | **Push**: "Channel Data Forwarding" POSTs JSON to our URL; must reply `SUCCESS` within 15 s [43]; also REST API | User-set [44] | **Buffers >300,000 records**, syncs when Wi-Fi returns [44] | UbiBot account; free plan 200 MB storage / 1 GB traffic per device; forwarding ~1 credit/month after free tier; Bronze $15/month [45] |
| Elitech RCW-360 WiFi | $83.99 (US), RCW-360PRO £79.99 + probe [46] | Yes, external probe −40…80 °C [46] | ±0.5 °C [46] | **No public API found** → no integration | — | 32,000 points offline [46] | Free iCold cloud [46] |
| Govee Wi-Fi (H5179) | not checked | No probe | — | Poll only; H5179 support in Govee OpenAPI inconsistent [47]; v1 limit 100 req/min (2020 doc) [48] | — | — | Govee account, API key |
| Aqara T&H + Zigbee hub | not checked | Borderline −20 °C [33] | ±0.3 °C [33] | Aqara developer platform (**unverified**) | — | — | Aqara account |
| Inkbird IBS-TH5-WiFi | not checked | No, 0–50 °C [35] | — | No public API found | — | — | Inkbird app |
| SensorPush + G1 gateway | G1 $99.95 [49] | Probe models exist (not checked) | — | Cloud API (poll) [49] | — | — | **No EU retailer found** [49] |
| Testo Saveris 2 / 174 T | Saveris 2-T1 from €161; 174 T BT from €99 [37] | Probe variants | EN 12830 / HACCP certified [37] | Testo Cloud; per-logger licence; public API **unverified** [37] | — | — | Paid Testo cloud |

### Recommendation (2 fridges, 1 freezer, optional blast chiller or cold room)
- **Primary (best integration, cheapest): Shelly 1 Gen3 + Plus Add-on + DS18B20 probes**, one
  probe per appliance (flat section through the door seal), relay boxes outside the cold.
  One Add-on takes up to 5 DS18B20 probes [27], so 1–2 Shelly sets cover all 4 points depending on
  cable runs. Parts: 2 × (€12.60–14 + €11.90–17) + 4 × €3.75 ≈ **€64–77**, plus 12 V DC adapters or
  a 230 V wiring job by an electrician (adapter price and labour **unverified**; the Shelly 1 Gen3
  accepts 110–240 V AC, 12 V DC or 24–48 V DC [26]). Readings are pushed straight to our HTTPS
  route; no vendor cloud. Downsides: DIY assembly, no buffering during Wi-Fi loss, ±2 °C freezer
  tolerance, no calibration certificate.
- **Budget, no wiring:** SwitchBot Outdoor Meters in the 2 fridges + Hub Mini (~€35 + 2 × €17 ≈
  **€69**, prices unverified on Amazon.it [34]), with **one Shelly probe set for freezer/blast
  chiller (~€30)** → ~€100. Uses the official SwitchBot webhook.
- **Turnkey alternative (offline buffering):** UbiBot WS1 Pro + probe per appliance (~€100 each,
  ~€400 for 4; price unverified in Italy) plus a small credit balance for data forwarding [45].

---

## Part C: What the app must build

**Printing (Brother QL via AirPrint/Android print).** A server route renders each batch label as
an exact-size page: either HTML with `@page { size: 62mm 29mm; margin: 0 }` (or 62 mm × N mm for
continuous rolls) and `window.print()`, or a server-generated PDF at the exact label size opened in
a new tab and printed from the share sheet. QR codes as SVG so they stay sharp at 300 dpi; allergens
in bold (red on the QL-820NWBc's two-colour rolls is optional). Add a per-venue setting for the
loaded label size and a "print test label" button, and document the print-dialog settings (100 %
scale, correct paper size) for iPhone and Android. Test early on real devices: AirPrint scaling bugs
are documented [22][23], and whether `window.print()` works inside an iOS Home-Screen PWA is
**unverified** (keep the "open PDF → share → Print" fallback). Effort: small (1–3 days plus device
testing). No printer SDK, no bridge.

**Temperature (Shelly push, primary).** (1) A table of sensors (tenant, appliance, type, limits)
and an append-only `temperature_readings` ledger (tenant, sensor, measured_at, value, source).
(2) An ingest endpoint for device pushes, authenticated by a per-device secret in the URL (Shelly
webhooks are URL-based [25]), validated with Zod and rate-limited. Note the project rule that the
Supabase secret key may only be used in `/api/cron/*` and `src/server/staff-auth/privileged.ts`:
ingest needs an ADR, e.g. a Supabase Edge Function or a `SECURITY DEFINER` RPC that checks the
device token, rather than a new service-key route. (3) A pg_cron job every 1–5 min [50] that
raises an alert on an out-of-range value and on **missing data** (the only way to catch Wi-Fi or
power loss, since Shelly does not buffer). Vercel Hobby cron runs only once per day [51], so
scheduling belongs in Supabase. Also note Vercel describes Hobby as personal/non-commercial
(third-party quote, **unverified** [51]). (4) Alerts: Web Push works on iOS 16.4+ only for
Home-Screen-installed web apps [52]; add email or SMS as a backup. (5) A daily HACCP sheet per
appliance (min/max/last, out-of-range events, corrective action, who checked), exportable as PDF and
kept at least 1 year. Effort: medium (about 1 milestone).
*SwitchBot variant:* same, plus a one-off `setupWebhook` call with the account token and a parser
for `changeReport` events [36][38]. *UbiBot variant:* the endpoint must answer `SUCCESS` within 15 s
[43]; device buffering fills gaps after outages, so de-duplicate by (sensor, timestamp).

**Italian HACCP practice (what ASL expects).**
- Reg. (CE) 852/2004 art. 5: a permanent HACCP-based procedure, with documents and records
  "proportionate to the nature and size" of the business; requirements are flexible for small
  businesses (Ministry of Health guide 2012; regional micro-business guidelines) [53].
- No fixed legal logging frequency was found. The venue's *manuale di autocontrollo* sets the
  frequency and limits, and the inspector checks the records against it. Common practice cited by
  trade blogs: **at least twice a day** (opening and closing), fridge ≤ +4 °C [54] (blog, **not a
  primary source**). ISS (Epicentro): refrigerators in food service should have instruments that
  record temperature rises so the cold chain can be assessed [54].
- Reg. (CE) 37/2005 (quick-frozen foods): storage must have recording instruments measuring air
  temperature "frequently and at regular intervals"; records dated and kept **≥ 1 year** [55].
  Retail display cabinets may use a visible thermometer, and the authority may exempt cold stores
  < 10 m³ [56]. How this applies to restaurant freezers was not confirmed. Recorders for frozen
  food are normally expected to meet EN 12830 [56]; consumer sensors are not certified.
- ASL/SIAN (and NAS) inspections typically review the HACCP manual, temperature logs, staff
  training certificates and traceability documents [54]. Penalty ranges quoted by blogs conflict
  and were not verified against D.Lgs. 193/2007 [54].
- Practical takeaway: automatic logs are a strong supplement, but the manual should say what the
  system measures, the limits, the alert response and the corrective actions, and that a sensor is
  checked against a calibrated reference periodically. Keep a paper or manual fallback for when a
  sensor is offline.

---

## Sources
1. Amazon.it QL-820NWBcVM https://www.amazon.it/Brother-Stampante-Etichette-Collegabile-QL-820NWBCVM/dp/B0BRJS4K63 ; QL-820nwbc https://amazon.it/Brother-QL820NWBC-Stampante-Etichette-Compatibilit%C3%A0/dp/B0BN1R61WY ; QL820NWB https://www.amazon.it/Brother-Stampante-Etichette-Bluetooth-Compatibilit%C3%A0/dp/B01MS9JQFI ; https://www.trovaprezzi.it/macchine-ufficio/prezzi-scheda-prodotto/brother_ql_820nwbc
2. https://www.bestbuy.com/site/-/5796910.p?cmp=RMX ; https://www.shi.com/product/33237056/QL-820NWB-LABEL-PRINTER ; https://oztoner.au/products/brother-ql820nwb-professional-wireless-label-printer
3. https://www.huntoffice.ie/brother-labelling-machine-ql-820nwb-ba77142.html ; https://store.brother.co.uk/devices/label-printer/ql/ql820nwb
4. https://www.unieuro.it/online/Stampanti-per-etichette/QL-810W-pidBROQL810W ; https://www.pccomponentes.it/recensioni/stampante-per-etichette-wi-fi-brother-ql-810wc ; https://bechtle.com/it-en/shop/brother-ql-810wc-td-300dpi-wifi-printer--4694620-02--p
5. https://www.brother-usa.com/products/QL810Wc ; https://www.bhphotovideo.com/c/product/1748825-REG/brother_ql_810wc_label_printer.html/specs
6. https://bechtle.com/it-en/shop/brother-ql-1110nwbc-td-300dpi-bt-printer--4691546-02--p ; https://www.ldlc.com/fr-be/fiche/PB00541008.html ; https://www.mediaworld.it/it/product/_stampante-brother-ql-1110nwbc-157253996.html
7. https://spartanpos.com/products/brother-td2350d203-2-3-desktop-label-printer-wi-fi ; https://shop.sumillion.com/brother-td-2350d300-label-printer-direct-thermal-300-x-300-dpi-152-mm-sec-wired-wireless-ethernet-lan-wi-fi-bluetooth-td2350d300z1.html
8. https://www.brother.com.ph/en/solutions/mopria-print
9. https://www.brother.co.jp/eng/dev/print/service/index.aspx ; https://help.runsignup.com/support/solutions/articles/17000125586-raceday-checkin-label-printer-setup
10. https://snapweb.net/en-en/label-printers/zebra/zd421d/zd4a042-d0ew02ez ; https://www.ebay.de/p/14064231544
11. https://bechtle.com/it/shop/stampante-hc-bt-et-203dpi-td-zebra-zd411--4667099--p ; https://bechtle.com/it/shop/stampante-td-ethernet-203-dpi-zd411--4667080--p
12. https://github.com/Komisio/komisio/issues/525 ; https://developer.zebra.com/content/zd621-ios-compatability
13. https://www.zebra.com/content/dam/support-dam/en/documentation/unrestricted/application-notes/zebra-web-printing-solutions-app-notes.pdf ; https://developer.zebra.com/community/home/blog/2016/02/26/zebra-web-printing-solutions ; https://techdocs.zebra.com/link-os/2-14/webservices/content/Weblink%20WebSocket%20Endpoint%20Configuration.pdf
14. https://store.datek.co.uk/dymo-labelwriter-5xl-label-printer-direct-thermal-300-x-300-dpi-wired-ethernet-lan-2112724 ; https://www.dymo.com/label-makers-printers/labelwriter-label-printers/dymo-labelwriter-print-server/SAP_1750630.html
15. https://coolblue.nl/en/product/898160/dymo-labelwriter-550.html ; https://apps.apple.com/app/dymo-connect/id1011393267
16. https://www.labelvalue.com/blog/what-labels-can-i-use-with-the-dymo-550-series-printers ; https://mjtsai.com/blog/2022/02/24/dymo-label-printer-rfid-drm
17. https://www.tomshw.it/altro/niimbot-b21-in-offerta-a-soli-60eur-13-wK9 ; https://www.smartworld.it/recensioni/yulinca-niimbot-b21
18. https://www.pkgstats.com/pkg:niimbot-web-bluetooth ; https://github.com/multimote/niimblue
19. https://www.alternate.it/Brother/DK-11209-nastro-per-etichettatrice-Nero-su-bianco-Nastro-di-scrittura/html/product/89208 ; https://www.comparateur-gamer.fr/prix/brother-dk-11209-4977766628136
20. https://www.brother.co.uk/supplies/label-printers/labels/dk/dk22205 ; https://bigbuy.eu/en/continuous-paper-for-printers-brother-dk-22205-62-mm_466980.html
21. https://ptouchdirect.com/all-about-brother-dk-labels.html ; https://www.ptouchdirect.com/how-do-you-p-touch.html-dk-label-roll-information-adhesion-resistance-and-durability/ ; https://blog.labelzone.co.uk/blog/frozen-labels-extreme-testing/
22. https://discussions.apple.com/thread/255804546
23. https://www.brother.com.ph/en/support/ql-1110nwb/faqs?cate=10035 ; https://discussions-jp-prz.apple.com/thread/255297521
24. https://www.shelly.com/it/products/shelly-h-t-gen3-1 ; https://www.shelly.com/en/products/shop/shelly-h-and-t-gen3-matte-black
25. https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Webhook
26. https://www.shelly.com/it/collections/all-products-for-the-feeds ; https://www.chollometro.com/ofertas/shelly-gen3-interruptor-inteligente-con-contactos-secos-wi-fi-y-bluetooth-1957316 ; https://asia.shelly.com/blogs/documentation/shelly-plus-add-on
27. https://www.shelly.com/it/products/shelly-temp-sensor-ds18b20 ; https://aio.lv/en/product--shelly-allshellyplusadd-on--7771284.md
28. https://www.digikey.com/en/products/detail/analog-devices-inc-maxim-integrated/DS18B20-T-R/1197286 ; https://partsbox.com/ecdb/ds18b20-plus-digital-thermometer-analog-devices.html
29. https://shelly-api-docs.shelly.cloud/gen2/Scripts/APIs/Timer ; https://shelly-api-docs.shelly.cloud/gen2/Scripts/APIs/Shelly ; https://www.shelly.com/blogs/scripts-library/send-energy-metering-data-in-watts-to-thingspeak-cloud
30. https://eu.switch-bot.com/pages/switchbot-indoor-outdoor-thermo-hygrometer ; https://manuals.plus/m/57950af546c7aed69c4bc7e96daca34be313df9e23e6db385d728f4b5c5dfa95
31. https://hex.pm/packages/shelly/0.3.0/files/lib/shelly.ex ; https://shelly-api-docs.shelly.cloud/cloud-control-api/real-time-events
32. https://www.shelly.com/it/products/shelly-h-t-gen3-ivory ; https://www.unieuro.it/online/Domotica/HT-Gen3-pidSLLINS750
33. https://aqara.cn/us/product/temperature-humidity-sensor/specs ; https://community.homey.app/t/temperature-sensors-in-homey/126108/5
34. https://eu.switch-bot.com/collections/iot ; https://goodio.be/en/product/249567-smart-hub-switchbot-hub-mini-with-matter-support
35. https://eu.inkbird.com/products/wifi-hygrometer-thermometer-ibs-th5-wifi
36. https://github.com/OpenWonderLabs/SwitchBotAPI ; https://github.com/hsakoh/switchbot-mqtt
37. https://faustlabscience.de/en/Mini-temperature-data-logger-testo-174-T/866801 ; https://www.testo.com/en-US/food/upgrade-saveris ; https://testo.com/en-UK/saveris/food/16x
38. https://community.homey.app/t/app-cloud-pro-switchbot-release-2-0-87-test-2-0-93/42296?page=28
39. https://support.switch-bot.com/hc/en-us/articles/360060298693
40. https://www.npmjs.com/package/switchbot-handler ; https://flows.nodered.org/node/node-red-contrib-switchbot-openapi
41. https://store.ubibot.com/products/ubibot-ws1-pro ; https://botland.store/withdrawn-products/18311-temperature-humidity-and-light-recorder-ws1-pro-wifi-ubibot-0712396022015.html
42. https://WWW.ROBOTSHOP.COM/products/ubibot-ws1-pro-wifi ; https://www.ubibot.com/download/9517/
43. https://www.ubibot.com/platform-api/2327/channel-data-forwarding/ ; https://www.ubibot.com/es/?p=746
44. https://www.ubibot.com/wp-content/uploads/dlm_uploads/2018/07/ws1-pro-user-guide.pdf ; https://store.ubibot.com/pages/ubibotws1pro-2-4ghzwifiandsimversion_faqs ; https://storage.mtender.gov.md/get/2b238f61-abd3-407a-a810-fed82b4304db-1679896920809
45. https://www.ubibot.com/pricing/ ; https://helpdesk.ubibot.com/article/about-free-plan-subscription
46. https://reach.dog/shop/mxelitechshop/products/elitech-rcw-360-iot-temperature-and-humidity-data-logger-wireless-remote-monitor-cloud-data-storage-ip-64-protection ; https://www.elitecheu.com/products/elitech-rcw-360pro-wifi-temperature-data-logger
47. https://community.home-assistant.io/t/solved-govee-wifi-thermometer-hygrometer-h5179-intergration-support/594003?page=3 ; https://community.homey.app/t/app-govee-making-your-life-smarter/50660
48. https://manuals.plus/m/a2c0e7c7efeb82f84ce1bffd0c2da7671d15aeb156bcc4bd136493e3a8605c00
49. https://www.sensorpush.com/products/p/g1
50. https://supabase.com/docs/guides/functions/schedule-functions ; https://supabase.com/docs/guides/database/extensions/pgcron
51. https://vercel.com/docs/cron-jobs/usage-and-pricing ; https://runhooks.app/blog/vercel-hobby-cron-job-limits-explained/
52. https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/
53. https://certifico.com/haccp/documenti-haccp/6315-guida-applicazione-sistema-haccp ; https://certifico.com/id/21212
54. https://qamarero.com/it/blog/temperatura-frigo-haccp-tabella-e-guida-completa/ ; https://qamarero.com/it/blog/ispettore-asl-ristoranti-guida-per-controlli-e-sanzioni/ ; https://www.epicentro.iss.it/alimentazione/haccp
55. https://www.ambientediritto.it/Legislazione/Salute/2005/reg%202005%2037%20ce.pdf
56. https://legislation.gov.uk/eur/2005/37/article/3/adopted/data.htm ; https://legislation.gov.uk/eur/2005/37/introduction/adopted
