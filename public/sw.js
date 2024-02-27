if (!self.define) {
  let e,
    a = {};
  const s = (s, t) => (
    (s = new URL(s + ".js", t).href),
    a[s] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, n) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[i]) return;
    let c = {};
    const u = (e) => s(e, i),
      o = { module: { uri: i }, exports: c, require: u };
    a[i] = Promise.all(t.map((e) => o[e] || u(e))).then((e) => (n(...e), c));
  };
}
define(["./workbox-9b4d2a02"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "4bb04150650945cacecdcc82058f60d9",
        },
        {
          url: "/_next/static/ZtHeSo4uXJFaQPVkHaIma/_buildManifest.js",
          revision: "a27b2b7607326fa26b144e657011ec52",
        },
        {
          url: "/_next/static/ZtHeSo4uXJFaQPVkHaIma/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/08e32899-4dc32a50b805514c.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/0e5ce63c-a0977ceabe13a931.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/1070-9b20651781e910cc.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/1768-6d821f6c9341e9f4.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/2323-223dccd0362f7d1f.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/2430-34f315d03ce8bb52.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/29d61979-105f1dc9d48d9bfe.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/2bc40315-600f0a8a726d2591.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/3046-b72e2e796c33f0bb.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/3406-7d87780e9bbe04af.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/3706-0be7ada16e1dac16.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/3794-35b23c763ea7c9f8.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/3939862f-6423aeb21d74155a.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/3db6e918-c1b293e63382677c.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/41230c25-7981e50ccadaf3da.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/4130.f958a065fc28420a.js",
          revision: "f958a065fc28420a",
        },
        {
          url: "/_next/static/chunks/4296-c0dd40766eb564ac.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/4459-6adfde6017338b6b.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/4592-edf7f4c2d4e14691.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/4777.6bf9607115a77002.js",
          revision: "6bf9607115a77002",
        },
        {
          url: "/_next/static/chunks/4893-b6eeea4eeaacf161.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/493-9403063f2f19f281.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/4938-ccb28c4005f9efe4.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/5250-b0fd7c9bed38c14f.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/5afae9cd-6ea09ff946b1ff5a.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/5c4a068a-7e8966df4b5d79fa.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/6626-1e08119940debf15.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/6691-1da1fb425aac2387.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/6947-821201bc87961003.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/6c3d43bb-2a01e690fef2ff50.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/758a8f17-6ae99216c9abf856.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/7803-62a7286981089b5d.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/7816-7d735086bad1695d.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/7b0fbde8-ec7c215460d669d7.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/8098-e6dba986614b79a6.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/8529-824d8fa82eca32ab.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/8808b817-f5e0ff04001a3837.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/8929-0ef5d905bf83bc26.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/8bd30861-1adfaf9617b73f35.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/9124.c5583a11902a20a3.js",
          revision: "c5583a11902a20a3",
        },
        {
          url: "/_next/static/chunks/9252-d33e68205239d45d.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/9948.ef74c3a37802453e.js",
          revision: "ef74c3a37802453e",
        },
        {
          url: "/_next/static/chunks/af164d00-06523487236bd9e6.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/about/page-32d73ce94cd6636d.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/analytics/page-ce52b1c69ca03a89.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/auth/error/page-5918adcde5161169.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/auth/login/page-6eec2342f2209667.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/auth/recovery/page-8dd6323aec72e5ed.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/auth/register/page-1e990b04a27cb4f8.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/auth/verification/page-fbe5da949e6402e6.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/blood-requests/%5Bid%5D/page-9b490b19d22cb4dc.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/blood-requests/new/page-e2f3172fb840f9ea.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/blood-requests/page-f7e88c5714e46555.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/clubs/%5Bid%5D/page-1fa05550b0cab8e3.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/clubs/new/page-b696baaa2fc7e8e8.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/clubs/page-e7c89425d95bc2de.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/collection-centers/%5Bid%5D/page-dc75edb22b4c2c2a.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/collection-centers/new/page-c9409eb93f23a726.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/collection-centers/page-1e1ade36e637fa5d.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/contacts/%5Bid%5D/page-e8f5f290edf88803.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/contacts/new/page-4b5795b1e3416c99.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/contacts/page-ea9fe241c9b2f132.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/events/%5Bid%5D/page-f0b9a94d0f3ea735.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/events/new/page-824facfb72248b2e.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/events/page-50590096b831fb96.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/funds/%5Bid%5D/page-ad33d502de947ed6.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/funds/new/page-319d44e11a7c0b34.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/funds/page-53806282663e5efb.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/layout-1472c3c29b649208.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/members/%5Bid%5D/page-27c575d8c45404e2.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/members/new/page-8018c7d9f9d1a5f4.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/members/page-5c9147d6dd8695db.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/not-found-bbd1c4bd96b16331.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/page-1f1de447c3998058.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/profile/page-aadc58c7717ab333.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/settings/page-2dd9aba575706c53.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/supports/%5Bid%5D/page-1482375d72d3a4a0.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/supports/page-b47db71a36623786.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/system-status/page-94c0cd434f4dc24a.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/teams/%5Bid%5D/page-97e7cd180062c999.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/teams/new/page-d3acb7c65bf759d4.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/teams/page-cf1951b37c5f0322.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/template-7972d965f0995116.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/updates/%5Bid%5D/page-6df592d63ca06ba5.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/updates/page-cf56be06ce23742d.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/users/%5Bid%5D/page-8d9fc41822368c0e.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/app/users/page-bbf8fc2b2ea41e28.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/bc9585cc-efeea0a8f64a6496.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/bc9c7fc9-0a81ef0f2047f9ed.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/bd8d7054-0a7f5415a3be3aec.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/c36591c5-ac6675b99e13b07d.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/fd9d1056-d1c67a117fee380b.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/framework-08aa667e5202eed8.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/main-028572e8530d5d63.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/main-app-88a6df2fd7257aae.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/pages/_app-31397adcb4d2b835.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/pages/_error-b225d4412fb76f89.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-21dd6e62e0843769.js",
          revision: "ZtHeSo4uXJFaQPVkHaIma",
        },
        {
          url: "/_next/static/css/bf85fff0694e0440.css",
          revision: "bf85fff0694e0440",
        },
        {
          url: "/_next/static/media/bg.86ac577b.svg",
          revision: "bc3d32a696895f78c19df6c717586a5d",
        },
        {
          url: "/_next/static/media/excel.c7062cd0.svg",
          revision: "34cf935682b191a067d4ff73b6c7f327",
        },
        {
          url: "/_next/static/media/simbio-color.f63f6e4e.svg",
          revision: "e0e42a4910d487f72d921441275452bd",
        },
        {
          url: "/_next/static/media/simbio-full-white.06b0c7e3.svg",
          revision: "4e2882ac080016bfbed85ef7f12b5dab",
        },
        { url: "/favicon.svg", revision: "04f8eeea468cd2bd3c6843432ec64046" },
        {
          url: "/image/branding/simbio-color.svg",
          revision: "e0e42a4910d487f72d921441275452bd",
        },
        {
          url: "/image/logo/bss.jpg",
          revision: "c1bb0f7efff7cd6eeade2909567e1968",
        },
        {
          url: "/image/logo/rcs.svg",
          revision: "6d87fc00f2c0c4a648bd8c2c62b063b3",
        },
        { url: "/manifest.json", revision: "eda0e74adca523815b81bdb7d96287a2" },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: s,
              state: t,
            }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: "OK",
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
