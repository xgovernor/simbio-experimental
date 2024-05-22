if (!self.define) {
  let s,
    e = {};
  const n = (n, t) => (
    (n = new URL(n + ".js", t).href),
    e[n] ||
      new Promise((e) => {
        if ("document" in self) {
          const s = document.createElement("script");
          (s.src = n), (s.onload = e), document.head.appendChild(s);
        } else (s = n), importScripts(n), e();
      }).then(() => {
        let s = e[n];
        if (!s) throw new Error(`Module ${n} didn’t register its module`);
        return s;
      })
  );
  self.define = (t, a) => {
    const i =
      s ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[i]) return;
    let c = {};
    const r = (s) => n(s, i),
      m = { module: { uri: i }, exports: c, require: r };
    e[i] = Promise.all(t.map((s) => m[s] || r(s))).then((s) => (a(...s), c));
  };
}
define(["./workbox-9b4d2a02"], function (s) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "e8dc3f143c4d7ed9d5d1583475181883",
        },
        {
          url: "/_next/static/5OmeHWt1vQ6ns5lTmH9VM/_buildManifest.js",
          revision: "a27b2b7607326fa26b144e657011ec52",
        },
        {
          url: "/_next/static/5OmeHWt1vQ6ns5lTmH9VM/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/08e32899-4dc32a50b805514c.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/0e5ce63c-a0977ceabe13a931.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/1070-e28572a4878771b6.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/1369-770471a54d97949f.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/1457-d85b996eba6c9ad5.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/1749-27380919380dad41.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/1768-6b4c6a6dc8b6a868.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/1867-b2fd9def3d030426.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/1954-92f1dce44110bea1.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/2635-cafbdd8e99dfad09.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/29d61979-105f1dc9d48d9bfe.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/2bc40315-600f0a8a726d2591.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/3046-b72e2e796c33f0bb.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/3333-90ea3d037af396e7.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/3775-65c846f3fc9790a2.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/3794-35b23c763ea7c9f8.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/3939862f-6423aeb21d74155a.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/3db6e918-c1b293e63382677c.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/41230c25-7981e50ccadaf3da.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/4130.f958a065fc28420a.js",
          revision: "f958a065fc28420a",
        },
        {
          url: "/_next/static/chunks/4459-6adfde6017338b6b.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/4579-17314bb0bd51457a.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/4592-edf7f4c2d4e14691.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/4777.6bf9607115a77002.js",
          revision: "6bf9607115a77002",
        },
        {
          url: "/_next/static/chunks/4893-b6eeea4eeaacf161.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/4938-ccb28c4005f9efe4.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/4991-a1fa305bd3f15f24.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/5250-b0fd7c9bed38c14f.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/5571-6afc6524bbb83cad.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/5677-05c3036dfab5c235.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/5afae9cd-6ea09ff946b1ff5a.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/5c4a068a-7e8966df4b5d79fa.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/6621-6a1edd9e5c4e0b61.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/6c3d43bb-2a01e690fef2ff50.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/7070-bc9de49e94841ae4.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/7448-a33d034fdfd3538f.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/758a8f17-6ae99216c9abf856.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/7b0fbde8-ec7c215460d669d7.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/8098-e6dba986614b79a6.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/8529-824d8fa82eca32ab.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/8808b817-f5e0ff04001a3837.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/8923-685641b62cd56f6c.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/8bd30861-1adfaf9617b73f35.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/9124.c5583a11902a20a3.js",
          revision: "c5583a11902a20a3",
        },
        {
          url: "/_next/static/chunks/9252-d33e68205239d45d.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/9860-49aa70e96e68c7f6.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/9936-36d6b88ddd8e0416.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/9948.ef74c3a37802453e.js",
          revision: "ef74c3a37802453e",
        },
        {
          url: "/_next/static/chunks/9999-c2567c9cfd430352.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/af164d00-06523487236bd9e6.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/about/page-3b3035e7679c0e46.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/page-d4bc288f300b188c.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/blood-requests/%5Bid%5D/page-b8413ebd3fbc7cbe.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/blood-requests/new/page-5b4bdfba314ffdb3.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/blood-requests/page-c48a96fbe7714b87.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/clubs/%5Bid%5D/page-8af2e8699234b346.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/clubs/new/page-21ae0331d7f4c3fa.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/clubs/page-dc34e4dfc1d29b69.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/collection-centers/%5Bid%5D/page-337ff6eaff6ed238.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/collection-centers/new/page-86650c074addb6c7.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/collection-centers/page-28bc0c82ad0c0ae6.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/contacts/%5Bid%5D/page-50f39e7347ea3ac3.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/contacts/new/page-82b3d3bbd321cce8.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/contacts/page-915403145b92a9f6.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/donations/%5Bid%5D/page-101db4b0f279956a.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/donations/new/page-f8179a6c5cec30bf.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/donations/page-91e611b67ca7b3b1.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/events/%5Bid%5D/page-a31161b65d23c46a.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/events/new/page-55ae6805d2478a1f.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/events/page-403a14c595e4cf10.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/funds/%5Bid%5D/page-aad950f1d873cc57.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/funds/new/page-b8bc5ca19e431c56.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/funds/page-5ab126c49b917f06.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/members/%5Bid%5D/page-b9087e6cea945b74.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/members/new/page-2140168d21b5a1c7.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/members/page-ced1c5a40bf20376.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/profile/page-210175ce22771405.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/page-c16255d44fa1208b.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/supports/%5Bid%5D/page-12e543cb85280094.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/supports/page-af0ace1f62c978ee.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/system-status/page-714734ffe407eef2.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/teams/%5Bid%5D/page-5461b8291678334f.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/teams/new/page-0a83be5687dfc254.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/teams/page-07faeee2d29cae78.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/updates/%5Bid%5D/page-00e2a12a5d029c54.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/updates/page-9c9395e897f9f853.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/users/page-2c923ef24c38871b.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/auth/error/page-9bd13ac4063efec7.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/auth/login/page-340a92981cd88b02.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/auth/recovery/page-1737b3699c9576f9.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/auth/register/page-da3f3a79094619ba.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/auth/verify/page-a061dc8829d554ad.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/forms/membership/page-d109d36731468d94.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/layout-37335a1ef482872a.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/not-found-8736d69ae2840935.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/page-aeddc31a1c8d0c01.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/app/template-1f43b0674ba853fb.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/bc9585cc-efeea0a8f64a6496.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/bc9c7fc9-0a81ef0f2047f9ed.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/bd8d7054-0a7f5415a3be3aec.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/c36591c5-ac6675b99e13b07d.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/fd9d1056-d1c67a117fee380b.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/framework-08aa667e5202eed8.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/main-6b28d29904708984.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/main-app-1716ea9587512bf4.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/pages/_app-31397adcb4d2b835.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/pages/_error-b225d4412fb76f89.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-df152cb79e961033.js",
          revision: "5OmeHWt1vQ6ns5lTmH9VM",
        },
        {
          url: "/_next/static/css/9165a3e419b92c90.css",
          revision: "9165a3e419b92c90",
        },
        {
          url: "/_next/static/media/avatar.783f2840.jpg",
          revision: "60ff812ffdc4c849541b3ecfb48dce3e",
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
        { url: "/favicon.svg", revision: "304206e624e919ea42e9303468a9d467" },
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
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      "/",
      new s.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: s,
              response: e,
              event: n,
              state: t,
            }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new s.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new s.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new s.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new s.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:mp4)$/i,
      new s.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:js)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:css|less)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new s.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new s.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        const e = s.pathname;
        return !e.startsWith("/api/auth/") && !!e.startsWith("/api/");
      },
      new s.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        return !s.pathname.startsWith("/api/");
      },
      new s.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      ({ url: s }) => !(self.origin === s.origin),
      new s.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
