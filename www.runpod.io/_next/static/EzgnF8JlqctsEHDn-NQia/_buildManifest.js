self.__BUILD_MANIFEST = function(e, s, a, c, t, i, n, r, u, p, d, l) {
    return {
        __rewrites: {
            afterFiles: [{
                has: s,
                source: r,
                destination: r
            }, {
                has: s,
                source: "/console",
                destination: s
            }, {
                has: s,
                source: "/console/:path*",
                destination: s
            }],
            beforeFiles: [],
            fallback: []
        },
        "/": [e, a, c, t, u, p, "static/chunks/pages/index-4a2785b755f16467.js"],
        "/404": ["static/chunks/pages/404-85a8ab4db8fc9aca.js"],
        "/_error": ["static/chunks/pages/_error-83f70c7be3775587.js"],
        "/about": [e, i, "static/chunks/pages/about-740b1498d3947e33.js"],
        "/about/company": ["static/chunks/pages/about/company-a902b3fe65362e26.js"],
        "/about/gpu-cloud": [e, i, "static/chunks/pages/about/gpu-cloud-5af9a86d413b925b.js"],
        "/about/jm-start": [e, i, "static/chunks/pages/about/jm-start-8066e0da787235b4.js"],
        "/careers": ["static/chunks/pages/careers-25bbb3893a974b4b.js"],
        "/compliance": ["static/chunks/pages/compliance-9798b74c15e3c322.js"],
        "/contact": [e, "static/chunks/pages/contact-18fc78a03564149c.js"],
        "/endpoint/dreambooth-v1": [e, c, "static/chunks/5891-2301360d95eece72.js", d, "static/chunks/1944-dd0ed31bdf1a6281.js", "static/chunks/pages/endpoint/dreambooth-v1-b48db21c2a1be33f.js"],
        "/endpoints": [a, t, n, "static/chunks/664-7d6416407161a88e.js", "static/chunks/pages/endpoints-35815cea65bdb761.js"],
        "/gpu-bare-metal-server": [e, "static/chunks/pages/gpu-bare-metal-server-00a6a8343f7293d4.js"],
        "/gpu-cloud": [e, a, c, t, u, p, "static/chunks/pages/gpu-cloud-1ee5ebd31d481d45.js"],
        "/gpu-instance": [e, "static/chunks/pages/gpu-instance-c473771b1b26f47d.js"],
        "/gpu-instance/pricing": [l, "static/chunks/pages/gpu-instance/pricing-f35049735c934fc4.js"],
        "/gpu-server": [e, "static/chunks/pages/gpu-server-f00295fa52d1c9bf.js"],
        "/legal": ["static/chunks/pages/legal-4f36915bee7c682f.js"],
        "/legal/cookie-policy": ["static/chunks/pages/legal/cookie-policy-cc59635240c22469.js"],
        "/legal/disclaimer": ["static/chunks/pages/legal/disclaimer-72436621455ecb91.js"],
        "/legal/privacy-policy": ["static/chunks/pages/legal/privacy-policy-2a81a53ac48e4293.js"],
        "/legal/terms-of-service": ["static/chunks/pages/legal/terms-of-service-b3a20a6c03eae665.js"],
        "/maintenance": [e, "static/chunks/pages/maintenance-c271429b33414442.js"],
        "/refer-a-friend": ["static/chunks/pages/refer-a-friend-99ed9a90c2345829.js"],
        "/replicate-api": [a, "static/chunks/8405-b6f6642498d4a5da.js", "static/chunks/pages/replicate-api-37a98ea04b3dd2cc.js"],
        "/replicate-demo": [a, n, "static/chunks/9229-803ac6b1f88dc0d4.js", "static/chunks/pages/replicate-demo-2980be58076d1754.js"],
        "/serverless-gpu": [c, t, n, l, d, "static/chunks/8168-a17a73c823e629a5.js", "static/chunks/pages/serverless-gpu-cff46305abbb3670.js"],
        "/serverless-referral": ["static/chunks/pages/serverless-referral-342f43a498129e14.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/about", "/about/company", "/about/gpu-cloud", "/about/jm-start", "/careers", "/compliance", "/contact", "/endpoint/dreambooth-v1", "/endpoints", "/gpu-bare-metal-server", "/gpu-cloud", "/gpu-instance", "/gpu-instance/pricing", "/gpu-server", "/legal", "/legal/cookie-policy", "/legal/disclaimer", "/legal/privacy-policy", "/legal/terms-of-service", "/maintenance", "/refer-a-friend", "/replicate-api", "/replicate-demo", "/serverless-gpu", "/serverless-referral"]
    }
}("static/chunks/9755-426d393739f2fb2a.js", void 0, "static/chunks/9912-8fc82b1dcbcd89db.js", "static/chunks/5386-d326077b7cbc1378.js", "static/chunks/2520-e44d120f24601dec.js", "static/chunks/7053-535382d317f7b3e3.js", "static/chunks/5271-6e8f5c92a65bb3f1.js", "/:path*", "static/chunks/8942-d9dc268173c800ab.js", "static/chunks/3725-951f05608685029d.js", "static/chunks/609-e9adcf778d807a51.js", "static/chunks/6325-d7a22ceb1743c0eb.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();