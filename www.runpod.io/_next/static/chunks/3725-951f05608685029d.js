"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3725], {
        53725: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return ep
                }
            });
            var i = n(85893),
                s = n(65582),
                r = n(67294),
                o = n(50893),
                l = n(90629),
                a = n(51233),
                d = n(15861),
                c = n(88441),
                x = n(87357),
                h = n(86886),
                m = n(83321),
                p = n(97650),
                u = n(65441),
                f = n(41899),
                g = n(90100),
                j = n(2734),
                v = n(67720);

            function Z(e) {
                var t, n, s, r, o, l, d, c, h, m, p;
                let {
                    data: f
                } = e, g = (0, j.Z)();
                return (0, i.jsxs)(a.Z, {
                    pl: {
                        xs: 0,
                        md: 20
                    },
                    alignItems: "center",
                    mt: {
                        xs: 10,
                        md: 3
                    },
                    spacing: 3,
                    children: [(0, i.jsx)(y, {
                        name: "A100",
                        price: null == f ? void 0 : null === (t = f.gpu["NVIDIA A100 80GB PCIe"]) || void 0 === t ? void 0 : t.securePrice,
                        size: null == f ? void 0 : null === (n = f.gpu["NVIDIA A100 80GB PCIe"]) || void 0 === n ? void 0 : n.memoryInGb,
                        theme: g
                    }), (0, i.jsx)(y, {
                        name: "H100",
                        price: null == f ? void 0 : null === (s = f.gpu["NVIDIA H100 PCIe"]) || void 0 === s ? void 0 : s.securePrice,
                        size: null == f ? void 0 : null === (r = f.gpu["NVIDIA H100 PCIe"]) || void 0 === r ? void 0 : r.memoryInGb,
                        theme: g
                    }), (0, i.jsx)(y, {
                        name: "A40",
                        price: null == f ? void 0 : null === (o = f.gpu["NVIDIA A40"]) || void 0 === o ? void 0 : o.securePrice,
                        size: null == f ? void 0 : null === (l = f.gpu["NVIDIA A40"]) || void 0 === l ? void 0 : l.memoryInGb,
                        theme: g
                    }), (0, i.jsx)(y, {
                        name: "RTX 4090",
                        price: (null == f ? void 0 : null === (d = f.gpu["NVIDIA GeForce RTX 4090"]) || void 0 === d ? void 0 : d.securePrice) || (null == f ? void 0 : null === (c = f.gpu["NVIDIA GeForce RTX 4090"]) || void 0 === c ? void 0 : c.communityPrice),
                        size: null == f ? void 0 : null === (h = f.gpu["NVIDIA GeForce RTX 4090"]) || void 0 === h ? void 0 : h.memoryInGb,
                        theme: g
                    }), (0, i.jsx)(y, {
                        name: "RTX A6000",
                        price: null == f ? void 0 : null === (m = f.gpu["NVIDIA RTX A6000"]) || void 0 === m ? void 0 : m.securePrice,
                        size: null == f ? void 0 : null === (p = f.gpu["NVIDIA RTX A6000"]) || void 0 === p ? void 0 : p.memoryInGb,
                        theme: g
                    }), (0, i.jsx)(x.Z, {
                        pt: 2,
                        children: (0, i.jsx)(u.Z, {
                            href: "/gpu-instance/pricing",
                            variant: "outlined",
                            size: "large",
                            sx: {
                                borderColor: "#824edc",
                                color: "white"
                            },
                            children: "See all GPUs"
                        })
                    })]
                })
            }
            let y = e => {
                let {
                    name: t,
                    price: n,
                    size: s
                } = e;
                return (0, i.jsxs)(a.Z, {
                    justifyContent: "center",
                    direction: {
                        xs: "column",
                        sm: "row"
                    },
                    children: [(0, i.jsxs)(l.Z, {
                        elevation: 0,
                        sx: {
                            alignItems: {
                                xs: "start",
                                sm: "end"
                            },
                            display: "flex",
                            flexDirection: {
                                xs: "row",
                                sm: "column"
                            },
                            px: 4,
                            py: .5,
                            width: 250
                        },
                        children: [(0, i.jsx)(d.Z, {
                            sx: {
                                fontSize: 22
                            },
                            variant: "h3",
                            children: t
                        }), (0, i.jsxs)(d.Z, {
                            sx: {
                                fontSize: 18,
                                ml: {
                                    xs: 2,
                                    sm: 0
                                }
                            },
                            children: [s, " GB"]
                        })]
                    }), (0, i.jsx)(v.Z, {
                        orientation: "vertical",
                        sx: {
                            display: {
                                xs: "none",
                                sm: "inherit"
                            }
                        }
                    }), (0, i.jsx)(v.Z, {
                        sx: {
                            display: {
                                xs: "inherit",
                                sm: "none"
                            }
                        }
                    }), (0, i.jsx)(l.Z, {
                        elevation: 0,
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            px: 4,
                            py: .5,
                            minWidth: {
                                xs: "100%",
                                sm: 250
                            }
                        },
                        children: (0, i.jsxs)(d.Z, {
                            sx: {
                                fontSize: 16,
                                textAlign: "left"
                            },
                            children: ["$", null == n ? void 0 : n.toFixed(2), " / hr"]
                        })
                    })]
                })
            };
            var b = n(31221),
                w = n(48317),
                S = n(89055);
            let I = e => {
                    let {
                        disabled: t
                    } = e, [n, s] = (0, r.useState)(0), x = Math.round(n / 2e3 * 100);
                    return x = x > 100 ? 100 : x, (0, o.Y)(() => {
                        let e = n + 100;
                        t || s(e > 4e3 ? 0 : e)
                    }, 200), (0, i.jsxs)(l.Z, {
                        sx: {
                            px: 3,
                            py: 2,
                            maxWidth: "90%",
                            width: 450,
                            backgroundColor: "transparent"
                        },
                        variant: "outlined",
                        children: [(0, i.jsx)(a.Z, {
                            direction: "row",
                            mb: 1,
                            justifyContent: "space-between",
                            spacing: 1,
                            children: ["".concat(x, "%"), "", "500 MiB/s"].map((e, t) => (0, i.jsx)(d.Z, {
                                variant: "subtitle1",
                                component: "div",
                                color: "text.secondary",
                                children: e
                            }, t))
                        }), (0, i.jsx)(c.Z, {
                            color: 100 === x ? "success" : "primary",
                            sx: {
                                mb: 1
                            },
                            value: x,
                            variant: "determinate"
                        })]
                    })
                },
                z = e => {
                    let {
                        children: t
                    } = e, {
                        ref: n,
                        inView: s
                    } = (0, p.YD)({
                        triggerOnce: !0,
                        threshold: 1
                    });
                    return (0, i.jsx)(l.Z, {
                        ref: n,
                        elevation: 0,
                        style: {
                            margin: "10px 0",
                            backgroundColor: "transparent",
                            filter: "drop-shadow(0 0 5px #824edc) drop-shadow(0 0 10px #824edc)",
                            transition: "opacity 1s ease-out",
                            opacity: s ? 1 : 0
                        },
                        children: t
                    })
                },
                P = e => {
                    let {
                        height: t,
                        gradient: n
                    } = e, {
                        ref: s,
                        inView: r
                    } = (0, p.YD)({
                        triggerOnce: !0,
                        threshold: 0
                    });
                    return (0, i.jsx)(x.Z, {
                        sx: {
                            height: t,
                            width: "1px",
                            position: "relative",
                            backgroundColor: "transparent"
                        },
                        children: (0, i.jsx)(x.Z, {
                            ref: s,
                            sx: {
                                position: "absolute",
                                width: "1px",
                                top: 0,
                                background: n || "linear-gradient(#824edc, #824edc)",
                                transition: "height 2s ease-out",
                                height: r ? "100%" : "0px"
                            }
                        })
                    })
                };

            function C(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    ref: s,
                    style: r
                } = function() {
                    let {
                        ref: e,
                        inView: t
                    } = (0, p.YD)({
                        triggerOnce: !0,
                        threshold: .1
                    });
                    return {
                        ref: e,
                        style: {
                            opacity: 0,
                            transform: "translateY(20px)",
                            animation: t ? "fadeIn 1.5s ease-out forwards" : "none",
                            "@keyframes fadeIn": {
                                "0%": {
                                    opacity: 0,
                                    transform: "translateY(20px)"
                                },
                                "100%": {
                                    opacity: 1,
                                    transform: "translateY(0)"
                                }
                            }
                        }
                    }
                }();
                return (0, i.jsx)(d.Z, {
                    ref: s,
                    ...n,
                    sx: { ...n.sx,
                        ...r
                    },
                    children: t
                })
            }
            var A = e => {
                let {
                    data: t
                } = e;
                return (0, i.jsxs)(h.ZP, {
                    container: !0,
                    px: 1,
                    maxWidth: 1050,
                    my: {
                        xs: 20,
                        md: 25
                    },
                    position: "relative",
                    children: [(0, i.jsxs)(h.ZP, {
                        item: !0,
                        xs: 12,
                        children: [(0, i.jsx)(x.Z, {
                            sx: {
                                backgroundImage: "url(/static/images/bg.webp)",
                                zIndex: -1,
                                height: "100vh",
                                width: "115vh",
                                transform: "rotate(-60deg)",
                                backgroundRepeat: "no-repeat",
                                filter: "blur(30px)",
                                position: "absolute",
                                top: "10%",
                                right: "-30%",
                                bottom: 0,
                                overflow: "hidden"
                            }
                        }), (0, i.jsxs)(a.Z, {
                            children: [(0, i.jsx)(C, {
                                color: "white",
                                fontSize: {
                                    xs: 32,
                                    sm: 38,
                                    md: 44
                                },
                                fontWeight: 400,
                                mb: 6,
                                variant: "h2",
                                sx: {
                                    filter: "drop-shadow(0 0 20px #824edc)"
                                },
                                lineHeight: 1.4,
                                children: "Launch a GPU instance in seconds"
                            }), (0, i.jsx)(d.Z, {
                                fontSize: {
                                    xs: 20,
                                    sm: 22,
                                    md: 26
                                },
                                variant: "body1",
                                children: "Run any GPU workload seamlessly, so you can focus less on ML ops and more on building your application."
                            })]
                        })]
                    }), (0, i.jsx)(h.ZP, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        children: (0, i.jsxs)(h.ZP, {
                            container: !0,
                            columnSpacing: 0,
                            gap: 0,
                            children: [(0, i.jsxs)(h.ZP, {
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                                mt: 7,
                                item: !0,
                                xs: 1,
                                children: [(0, i.jsx)(z, {
                                    children: (0, i.jsx)(f.Z, {
                                        sx: {
                                            fontSize: 30,
                                            color: "#CBCCD2"
                                        }
                                    })
                                }), (0, i.jsx)(P, {
                                    height: "100%"
                                })]
                            }), (0, i.jsxs)(h.ZP, {
                                item: !0,
                                mt: 8,
                                pb: 8,
                                pl: 4,
                                xs: 11,
                                children: [(0, i.jsx)(d.Z, {
                                    variant: "h3",
                                    children: "50+ Template Environments"
                                }), (0, i.jsx)(d.Z, {
                                    fontSize: 18,
                                    variant: "body1",
                                    mt: 1,
                                    children: "Choose from 50+ templates ready out-of-the-box, or bring your own custom container."
                                }), (0, i.jsxs)(h.ZP, {
                                    mt: 2,
                                    container: !0,
                                    spacing: 2,
                                    children: [(0, i.jsx)(h.ZP, {
                                        item: !0,
                                        children: (0, i.jsx)(l.Z, {
                                            elevation: 3,
                                            style: {
                                                padding: "16px",
                                                backgroundColor: "transparent"
                                            },
                                            children: (0, i.jsx)(d.Z, {
                                                children: "PyTorch"
                                            })
                                        })
                                    }), (0, i.jsx)(h.ZP, {
                                        item: !0,
                                        children: (0, i.jsx)(l.Z, {
                                            elevation: 3,
                                            style: {
                                                padding: "16px",
                                                backgroundColor: "transparent"
                                            },
                                            children: (0, i.jsx)(d.Z, {
                                                children: "Tensoflow"
                                            })
                                        })
                                    }), (0, i.jsx)(h.ZP, {
                                        item: !0,
                                        children: (0, i.jsx)(l.Z, {
                                            elevation: 3,
                                            style: {
                                                padding: "16px",
                                                backgroundColor: "transparent"
                                            },
                                            children: (0, i.jsx)(d.Z, {
                                                children: "Axolotl"
                                            })
                                        })
                                    }), (0, i.jsx)(h.ZP, {
                                        item: !0,
                                        children: (0, i.jsx)(l.Z, {
                                            elevation: 3,
                                            style: {
                                                padding: "16px",
                                                backgroundColor: "transparent"
                                            },
                                            children: (0, i.jsx)(d.Z, {
                                                children: "Stable Diffusion"
                                            })
                                        })
                                    }), (0, i.jsx)(h.ZP, {
                                        item: !0,
                                        children: (0, i.jsx)(l.Z, {
                                            elevation: 3,
                                            style: {
                                                padding: "16px",
                                                backgroundColor: "transparent"
                                            },
                                            children: (0, i.jsx)(d.Z, {
                                                children: "Dreambooth"
                                            })
                                        })
                                    }), (0, i.jsx)(h.ZP, {
                                        item: !0,
                                        children: (0, i.jsx)(l.Z, {
                                            elevation: 3,
                                            style: {
                                                padding: "16px",
                                                backgroundColor: "transparent"
                                            },
                                            children: (0, i.jsx)(d.Z, {
                                                children: "TheBloke LLMs"
                                            })
                                        })
                                    }), (0, i.jsx)(h.ZP, {
                                        item: !0,
                                        children: (0, i.jsx)(l.Z, {
                                            elevation: 3,
                                            style: {
                                                padding: "16px",
                                                backgroundColor: "transparent"
                                            },
                                            children: (0, i.jsx)(d.Z, {
                                                children: "A1111"
                                            })
                                        })
                                    }), (0, i.jsx)(h.ZP, {
                                        item: !0,
                                        children: (0, i.jsx)(u.Z, {
                                            href: "/console/templates",
                                            variant: "outlined",
                                            size: "large",
                                            sx: {
                                                borderColor: "#824edc",
                                                color: "white",
                                                fontSize: 14
                                            },
                                            children: "50+ Others"
                                        })
                                    })]
                                })]
                            }), (0, i.jsxs)(h.ZP, {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                item: !0,
                                xs: 1,
                                children: [(0, i.jsx)(z, {
                                    children: (0, i.jsx)(S.Z, {
                                        sx: {
                                            fontSize: 30,
                                            color: "#CBCCD2"
                                        }
                                    })
                                }), (0, i.jsx)(P, {
                                    height: "100%"
                                })]
                            }), (0, i.jsxs)(h.ZP, {
                                item: !0,
                                mt: 1,
                                pb: 8,
                                pl: 4,
                                xs: 11,
                                children: [(0, i.jsx)(d.Z, {
                                    variant: "h3",
                                    children: "Global Interoperability"
                                }), (0, i.jsx)(d.Z, {
                                    fontSize: 18,
                                    variant: "body1",
                                    mt: 1,
                                    children: "Select from 30+ regions across North America, Europe, and South America."
                                })]
                            }), (0, i.jsxs)(h.ZP, {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                item: !0,
                                xs: 1,
                                children: [(0, i.jsx)(z, {
                                    children: (0, i.jsx)(g.Z, {
                                        sx: {
                                            fontSize: 30,
                                            color: "#CBCCD2"
                                        }
                                    })
                                }), (0, i.jsx)(P, {
                                    height: "100%"
                                })]
                            }), (0, i.jsxs)(h.ZP, {
                                item: !0,
                                mt: 1,
                                pb: 8,
                                pl: 4,
                                xs: 11,
                                children: [(0, i.jsx)(d.Z, {
                                    variant: "h3",
                                    children: "Limitless Storage"
                                }), (0, i.jsx)(d.Z, {
                                    fontSize: 18,
                                    variant: "body1",
                                    mt: 1,
                                    children: "Ultra-fast NVMe storage for your datasets and models, so you can rapidly scale development."
                                })]
                            }), (0, i.jsxs)(h.ZP, {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                item: !0,
                                xs: 1,
                                children: [(0, i.jsx)(z, {
                                    children: (0, i.jsx)(b.Z, {
                                        sx: {
                                            fontSize: 30,
                                            color: "#CBCCD2"
                                        }
                                    })
                                }), (0, i.jsx)(P, {
                                    height: "100%"
                                })]
                            }), (0, i.jsxs)(h.ZP, {
                                item: !0,
                                mt: 1,
                                pl: 4,
                                xs: 11,
                                children: [(0, i.jsx)(d.Z, {
                                    variant: "h3",
                                    children: "Deploy in Seconds"
                                }), (0, i.jsx)(d.Z, {
                                    fontSize: 18,
                                    variant: "body1",
                                    mb: 3,
                                    mt: 1,
                                    children: "Configure your deployment and launch in seconds."
                                }), (0, i.jsx)(I, {}), (0, i.jsx)(a.Z, {
                                    mt: 4,
                                    direction: "row",
                                    justifyContent: {
                                        xs: "center",
                                        md: "start"
                                    },
                                    spacing: 2,
                                    children: (0, i.jsx)(m.Z, {
                                        href: "/console/gpu-cloud",
                                        variant: "outlined",
                                        size: "large",
                                        sx: {
                                            borderColor: "#824edc",
                                            color: "white"
                                        },
                                        endIcon: (0, i.jsx)(w.Z, {}),
                                        children: "Get Started"
                                    })
                                })]
                            })]
                        })
                    }), (0, i.jsx)(h.ZP, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        mt: {
                            xs: 2,
                            md: 5
                        },
                        children: (0, i.jsx)(Z, {
                            data: t
                        })
                    })]
                })
            };

            function k(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    ref: s,
                    style: r
                } = function() {
                    let {
                        ref: e,
                        inView: t
                    } = (0, p.YD)({
                        triggerOnce: !0,
                        threshold: .1
                    });
                    return {
                        ref: e,
                        style: {
                            opacity: 0,
                            transform: "translateY(20px)",
                            animation: t ? "fadeIn 2s ease-out forwards" : "none",
                            "@keyframes fadeIn": {
                                "0%": {
                                    opacity: 0,
                                    transform: "translateY(20px)"
                                },
                                "100%": {
                                    opacity: 1,
                                    transform: "translateY(0)"
                                }
                            }
                        }
                    }
                }();
                return (0, i.jsx)(d.Z, {
                    ref: s,
                    ...n,
                    sx: { ...n.sx,
                        ...r
                    },
                    children: t
                })
            }
            var D = () => (0, i.jsxs)(a.Z, {
                    maxWidth: {
                        xs: "90vw",
                        md: 930
                    },
                    mb: 25,
                    spacing: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    children: [(0, i.jsxs)(a.Z, {
                        direction: "column",
                        children: [(0, i.jsx)(k, {
                            color: "white",
                            fontSize: {
                                xs: 32,
                                sm: 38,
                                md: 42
                            },
                            fontWeight: 400,
                            gutterBottom: !0,
                            textAlign: "center",
                            variant: "h2",
                            sx: {
                                filter: "drop-shadow(0 0 20px #824edc)"
                            },
                            children: "Launch your AI application in seconds"
                        }), (0, i.jsx)(d.Z, {
                            fontSize: {
                                xs: 22,
                                sm: 24,
                                md: 26
                            },
                            mt: 4,
                            textAlign: "center",
                            variant: "body1",
                            children: "Experience the most cost-effective GPU cloud platform built for production."
                        })]
                    }), (0, i.jsx)(a.Z, {
                        direction: "row",
                        justifyContent: {
                            xs: "center",
                            md: "start"
                        },
                        spacing: 2,
                        children: (0, i.jsx)(m.Z, {
                            href: "/console/gpu-cloud",
                            variant: "outlined",
                            size: "large",
                            sx: {
                                borderColor: "#824edc",
                                color: "white",
                                mt: -3
                            },
                            endIcon: (0, i.jsx)(w.Z, {}),
                            children: "Get Started"
                        })
                    })]
                }),
                R = n(90948),
                G = n(98396),
                W = n(89755),
                Y = n.n(W);
            let B = (0, R.ZP)("div")(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        overflow: "hidden",
                        display: "flex",
                        animation: "scroll 40s linear infinite",
                        width: "fit-content",
                        "@keyframes scroll": {
                            "0%": {
                                transform: "translateX(0)"
                            },
                            "100%": {
                                transform: "translateX(-50%)"
                            }
                        }
                    }
                }),
                L = (0, R.ZP)(x.Z)(() => ({
                    alignItems: "center",
                    justifyContent: "center",
                    filter: "grayscale(1) opacity(0.6)",
                    paddingLeft: 30,
                    display: "flex",
                    alignItems: "center"
                })),
                T = e => {
                    let {
                        src: t,
                        alt: n,
                        height: s,
                        width: r
                    } = e;
                    return (0, i.jsx)(L, {
                        width: r,
                        children: (0, i.jsx)(Y(), {
                            loading: "lazy",
                            alt: n,
                            height: s,
                            width: r,
                            src: t
                        })
                    })
                },
                E = [{
                    src: "/static/images/companies/compressed/opencv.png",
                    height: 60,
                    width: 50,
                    alt: "opencv logo"
                }, {
                    src: "/static/images/companies/compressed/replika.png",
                    height: 53,
                    width: 90,
                    alt: "replika logo"
                }, {
                    src: "/static/images/companies/compressed/dsd.png",
                    height: 37,
                    width: 152,
                    alt: "datasciencedojo logo"
                }, {
                    src: "/static/images/companies/compressed/jina.png",
                    height: 35,
                    width: 80,
                    alt: "jina logo"
                }, {
                    src: "/static/images/companies/compressed/definedai.png",
                    height: 23,
                    width: 130,
                    alt: "defined ai logo"
                }, {
                    src: "/static/images/companies/compressed/otovo.png",
                    height: 44,
                    width: 120,
                    alt: "otovo logo"
                }, {
                    src: "/static/images/companies/compressed/abzu.png",
                    height: 35,
                    width: 90,
                    alt: "abzu logo"
                }, {
                    src: "/static/images/companies/compressed/aftershoot.png",
                    height: 27,
                    width: 150,
                    alt: "aftershoot logo"
                }, {
                    src: "/static/images/companies/compressed/krnl.png",
                    height: 33,
                    width: 120,
                    alt: "krnl logo"
                }];
            var O = () => {
                    let e = (0, j.Z)(),
                        t = (0, G.Z)(e.breakpoints.down("sm"));
                    return (0, i.jsx)(x.Z, {
                        alignItems: "center",
                        maxWidth: 900,
                        mb: {
                            xs: 2,
                            sm: 1.5,
                            md: 0
                        },
                        overflow: "hidden",
                        children: t ? (0, i.jsxs)(B, {
                            children: [E.map((e, t) => (0, i.jsx)(T, {
                                src: e.src,
                                width: 1.2 * e.width,
                                height: 1.2 * e.height,
                                alt: e.alt
                            }, e.src)), E.map((e, t) => (0, i.jsx)(T, {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: e.alt
                            }, e.src))]
                        }) : (0, i.jsxs)(B, {
                            children: [E.map((e, t) => (0, i.jsx)(T, {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: e.alt
                            }, e.src)), E.map((e, t) => (0, i.jsx)(T, {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: e.alt,
                                paddingTop: 100
                            }, e.src))]
                        })
                    })
                },
                U = n(76030);

            function N(e) {
                let t = (0, r.useRef)(null),
                    n = (0, r.useRef)(null);
                return (0, r.useEffect)(() => {
                    let e = t.current.getTotalLength(),
                        i = n.current.getTotalLength();
                    t.current.style.strokeDasharray = String(e), t.current.style.strokeDashoffset = String(e), n.current.style.strokeDasharray = String(i), n.current.style.strokeDashoffset = String(i), t.current.style.visibility = "visible", n.current.style.visibility = "visible", (0, U.Z)({
                        targets: [t.current, n.current],
                        strokeDashoffset: [U.Z.setDashoffset, 0],
                        easing: "easeInOutSine",
                        duration: 4e3,
                        delay: (e, t) => 250 * t,
                        begin: function(e) {
                            for (let t of e.animatables) t.target.setAttribute("stroke-dashoffset", U.Z.setDashoffset(t.target))
                        }
                    })
                }, []), (0, i.jsx)(x.Z, {
                    sx: {
                        display: {
                            md: "block",
                            xs: "block"
                        },
                        justifyContent: "center",
                        alignItems: "center",
                        filter: "drop-shadow(0 0 10px #824edc)",
                        svg: {
                            transformOrigin: "center"
                        },
                        "@media (max-height: 680px)": {
                            display: "none"
                        }
                    },
                    ...e,
                    children: (0, i.jsx)("svg", {
                        viewBox: "0 0 2000 2000",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("g", {
                            children: (0, i.jsxs)("g", {
                                children: [(0, i.jsx)("path", {
                                    style: {
                                        fill: "none",
                                        stroke: "#824edc",
                                        strokeWidth: 10,
                                        visibility: "hidden"
                                    },
                                    ref: t,
                                    d: "M1017.95,711.04c-4.22,2.36-9.18,3.01-13.86,1.82L386.17,555.3c-41.72-10.76-86.02-0.63-116.6,29.73 l-1.4,1.39c-35.92,35.65-27.55,95.8,16.74,120.3l584.32,324.23c31.36,17.4,50.82,50.45,50.82,86.32v806.76 c0,35.49-38.41,57.67-69.15,39.94l-703.15-405.64c-23.6-13.61-38.13-38.78-38.13-66.02V666.63c0-87.24,46.45-167.89,121.92-211.66 L933.85,42.15c23.48-13.8,51.47-17.7,77.83-10.84l745.71,194.1c31.53,8.21,36.99,50.65,8.56,66.57L1017.95,711.04z"
                                }), (0, i.jsx)("path", {
                                    style: {
                                        fill: "none",
                                        stroke: "#824edc",
                                        strokeWidth: 10,
                                        visibility: "hidden"
                                    },
                                    ref: n,
                                    d: "M1527.75,536.38l128.89-79.63l189.92,109.17c27.24,15.66,43.97,44.73,43.82,76.15l-4,857.6 c-0.11,24.39-13.15,46.89-34.25,59.11l-701.75,406.61c-32.3,18.71-72.74-4.59-72.74-41.92v-797.43 c0-38.98,21.06-74.91,55.07-93.96l590.17-330.53c18.23-10.21,18.65-36.3,0.75-47.09L1527.75,536.38z"
                                }), (0, i.jsx)("path", {
                                    style: {
                                        fill: "none",
                                        stroke: "#824edc",
                                        strokeWidth: 10,
                                        visibility: "hidden"
                                    },
                                    d: "M1524.01,665.91"
                                })]
                            })
                        })
                    })
                })
            }

            function V() {
                return (0, i.jsxs)(a.Z, {
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    sx: {
                        width: "100%",
                        position: "relative",
                        height: "calc(100vh - 71px)"
                    },
                    children: [(0, i.jsxs)(a.Z, {
                        alignItems: "center",
                        direction: {
                            xs: "column-reverse",
                            md: "row"
                        },
                        justifyContent: "center",
                        sx: {
                            width: "100%",
                            px: {
                                xs: 2,
                                sm: 3,
                                lg: 0
                            },
                            py: {
                                xs: 0,
                                md: 0
                            }
                        },
                        spacing: {
                            xs: 0,
                            md: 0
                        },
                        children: [(0, i.jsx)(a.Z, {
                            direction: "row",
                            height: "100%",
                            alignItems: "center",
                            spacing: {
                                md: 8,
                                lg: 15,
                                xl: 24
                            },
                            sx: {
                                position: "relative"
                            },
                            children: (0, i.jsxs)(a.Z, {
                                spacing: {
                                    xs: 3,
                                    md: 4
                                },
                                children: [(0, i.jsx)(d.Z, {
                                    fontSize: {
                                        xs: 44,
                                        sm: 50,
                                        md: 60,
                                        xl: 65
                                    },
                                    textAlign: {
                                        xs: "center",
                                        md: "left"
                                    },
                                    variant: "h1",
                                    children: "The Cloud Built for AI"
                                }), (0, i.jsxs)(d.Z, {
                                    fontSize: {
                                        xs: 18,
                                        sm: 20
                                    },
                                    fontWeight: 400,
                                    lineHeight: {
                                        xs: 1.5,
                                        md: 1.8
                                    },
                                    textAlign: {
                                        xs: "center",
                                        sm: "left"
                                    },
                                    variant: "h2",
                                    children: ["Globally distributed GPU cloud built for production.", (0, i.jsxs)(d.Z, {
                                        display: {
                                            xs: "none",
                                            md: "block"
                                        },
                                        fontSize: {
                                            xs: 18,
                                            sm: 20
                                        },
                                        children: [(0, i.jsx)("strong", {
                                            children: "Develop"
                                        }), ", ", (0, i.jsx)("strong", {
                                            children: "train"
                                        }), ", and ", (0, i.jsx)("strong", {
                                            children: "scale"
                                        }), " AI applications."]
                                    })]
                                }), (0, i.jsx)(a.Z, {
                                    direction: "row",
                                    justifyContent: {
                                        xs: "center",
                                        md: "start"
                                    },
                                    children: (0, i.jsx)(m.Z, {
                                        href: "/console/gpu-cloud",
                                        variant: "outlined",
                                        size: "large",
                                        sx: {
                                            borderColor: "#824edc",
                                            color: "white"
                                        },
                                        endIcon: (0, i.jsx)(w.Z, {}),
                                        children: "Start Building"
                                    })
                                })]
                            })
                        }), (0, i.jsx)(a.Z, {
                            children: (0, i.jsx)(N, {
                                ml: {
                                    xs: 0,
                                    md: 8
                                },
                                pt: {
                                    xs: 2,
                                    md: 0
                                },
                                pb: {
                                    xs: 3,
                                    md: 0
                                },
                                width: {
                                    xs: 150,
                                    md: 256
                                }
                            })
                        })]
                    }), (0, i.jsx)(O, {})]
                })
            }
            var X = n(24036),
                M = n(30762),
                q = n(12013),
                F = n(25601),
                H = n(76218),
                _ = n(9459),
                J = n(81261),
                K = n(1e4);
            let $ = e => {
                let {
                    children: t
                } = e, {
                    ref: n,
                    inView: s
                } = (0, p.YD)({
                    triggerOnce: !0,
                    threshold: .1
                });
                return (0, i.jsx)(l.Z, {
                    ref: n,
                    elevation: 0,
                    style: {
                        margin: "10px 0",
                        backgroundColor: "transparent",
                        filter: "drop-shadow(0 0 5px #824edc) drop-shadow(0 0 10px #824edc)",
                        transition: "opacity 1s ease-out",
                        opacity: s ? 1 : 0
                    },
                    children: t
                })
            };

            function Q(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    ref: s,
                    style: r
                } = function() {
                    let {
                        ref: e,
                        inView: t
                    } = (0, p.YD)({
                        triggerOnce: !0,
                        threshold: .1
                    });
                    return {
                        ref: e,
                        style: {
                            opacity: 0,
                            transform: "translateY(20px)",
                            animation: t ? "fadeIn 2s ease-out forwards" : "none",
                            "@keyframes fadeIn": {
                                "0%": {
                                    opacity: 0,
                                    transform: "translateY(20px)"
                                },
                                "100%": {
                                    opacity: 1,
                                    transform: "translateY(0)"
                                }
                            }
                        }
                    }
                }();
                return (0, i.jsx)(d.Z, {
                    ref: s,
                    ...n,
                    sx: { ...n.sx,
                        ...r
                    },
                    children: t
                })
            }
            var ee = e => {
                    let {
                        data: t
                    } = e;
                    return (0, i.jsx)(a.Z, {
                        maxWidth: 1050,
                        mb: {
                            xs: 20,
                            md: 25
                        },
                        justifyContent: "center",
                        alignItems: "center",
                        spacing: 8,
                        children: (0, i.jsxs)(x.Z, {
                            position: "relative",
                            children: [(0, i.jsx)(x.Z, {
                                display: {
                                    xs: "none",
                                    md: "block"
                                },
                                sx: {
                                    backgroundImage: "url(/static/images/bg.webp)",
                                    zIndex: -1,
                                    height: 800,
                                    width: 900,
                                    transform: "rotate(180deg)",
                                    backgroundRepeat: "no-repeat",
                                    filter: "blur(40px)",
                                    position: "relative",
                                    top: 430,
                                    right: 0,
                                    bottom: 0,
                                    overflow: "hidden",
                                    mt: -60
                                }
                            }), (0, i.jsxs)(a.Z, {
                                mt: {
                                    xs: 0,
                                    md: -30
                                },
                                children: [(0, i.jsx)(Q, {
                                    color: "white",
                                    fontSize: {
                                        xs: 32,
                                        sm: 38,
                                        md: 44
                                    },
                                    fontWeight: 400,
                                    mb: 6,
                                    variant: "h2",
                                    sx: {
                                        filter: "drop-shadow(0 0 20px #824edc)"
                                    },
                                    lineHeight: 1.4,
                                    children: "Scale inference on your models with Serverless"
                                }), (0, i.jsx)(d.Z, {
                                    fontSize: {
                                        xs: 20,
                                        sm: 22,
                                        md: 26
                                    },
                                    variant: "body1",
                                    children: "Create production-ready endpoints that autoscale from 0 to 100s of GPUs in seconds. Only pay for the resources you use."
                                })]
                            }), (0, i.jsx)(a.Z, {
                                mt: 4,
                                children: (0, i.jsxs)(h.ZP, {
                                    mt: 2,
                                    mb: 2,
                                    container: !0,
                                    children: [(0, i.jsx)(h.ZP, {
                                        xs: 6,
                                        item: !0,
                                        md: 3,
                                        children: (0, i.jsxs)(x.Z, {
                                            children: [(0, i.jsx)(d.Z, {
                                                color: "white",
                                                fontSize: {
                                                    xs: 28,
                                                    sm: 30
                                                },
                                                children: "99.99%"
                                            }), (0, i.jsx)(d.Z, {
                                                fontSize: 20,
                                                variant: "body1",
                                                children: "guaranteed uptime"
                                            })]
                                        })
                                    }), (0, i.jsx)(h.ZP, {
                                        xs: 6,
                                        item: !0,
                                        md: 3,
                                        children: (0, i.jsxs)(x.Z, {
                                            children: [(0, i.jsx)(d.Z, {
                                                color: "white",
                                                fontSize: {
                                                    xs: 28,
                                                    sm: 30
                                                },
                                                children: "13"
                                            }), (0, i.jsx)(d.Z, {
                                                fontSize: 20,
                                                variant: "body1",
                                                children: "regions"
                                            })]
                                        })
                                    }), (0, i.jsx)(h.ZP, {
                                        xs: 6,
                                        item: !0,
                                        md: 3,
                                        marginTop: {
                                            xs: "10px",
                                            sm: 0
                                        },
                                        display: {
                                            xs: "none",
                                            sm: "flex"
                                        },
                                        children: (0, i.jsxs)(x.Z, {
                                            children: [(0, i.jsx)(d.Z, {
                                                color: "white",
                                                fontSize: {
                                                    xs: 28,
                                                    sm: 30
                                                },
                                                children: "10PB+"
                                            }), (0, i.jsx)(d.Z, {
                                                fontSize: 20,
                                                variant: "body1",
                                                children: "network storage"
                                            })]
                                        })
                                    }), (0, i.jsx)(h.ZP, {
                                        sm: 6,
                                        xs: 12,
                                        item: !0,
                                        md: 3,
                                        marginTop: {
                                            xs: "10px",
                                            sm: 0
                                        },
                                        children: (0, i.jsx)(x.Z, {
                                            children: (0, i.jsx)(F.Z, {
                                                data: t,
                                                requestProps: {
                                                    variant: "body1"
                                                }
                                            })
                                        })
                                    })]
                                })
                            }), (0, i.jsx)(a.Z, {
                                justifyContent: "center",
                                alignItems: "center",
                                children: (0, i.jsx)(x.Z, {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    children: (0, i.jsxs)(h.ZP, {
                                        container: !0,
                                        mt: 4,
                                        children: [(0, i.jsxs)(h.ZP, {
                                            item: !0,
                                            xs: 11,
                                            md: 5.5,
                                            children: [(0, i.jsxs)(x.Z, {
                                                width: {
                                                    xs: "100%",
                                                    textAlign: "left"
                                                },
                                                children: [(0, i.jsx)($, {
                                                    children: (0, i.jsx)(_.Z, {
                                                        sx: {
                                                            fontSize: "30px"
                                                        }
                                                    })
                                                }), (0, i.jsx)(d.Z, {
                                                    mt: 2,
                                                    variant: "h3",
                                                    sx: {
                                                        fontSize: "24px",
                                                        textAlign: "left"
                                                    },
                                                    children: "Autoscale to Millions of Requests"
                                                }), (0, i.jsx)(d.Z, {
                                                    variant: "body1",
                                                    sx: {
                                                        fontSize: "18px",
                                                        textAlign: "left"
                                                    },
                                                    mt: 1,
                                                    children: "Scale inference, or fine-tuning workloads to thousands of concurrent GPUs and back to zero in seconds."
                                                })]
                                            }), (0, i.jsxs)(x.Z, {
                                                mt: 8,
                                                width: {
                                                    xs: "100%",
                                                    textAlign: "left"
                                                },
                                                children: [(0, i.jsx)($, {
                                                    children: (0, i.jsx)(J.Z, {
                                                        sx: {
                                                            fontSize: "30px"
                                                        }
                                                    })
                                                }), (0, i.jsx)(d.Z, {
                                                    mt: 2,
                                                    variant: "h3",
                                                    sx: {
                                                        fontSize: "24px",
                                                        textAlign: "left"
                                                    },
                                                    children: "Zero Ops Overhead"
                                                }), (0, i.jsx)(d.Z, {
                                                    variant: "body1",
                                                    sx: {
                                                        fontSize: "18px",
                                                        textAlign: "left"
                                                    },
                                                    mt: 1,
                                                    children: "RunPod handles all the operational aspects of your infrastructure from deploying to scaling."
                                                })]
                                            }), (0, i.jsxs)(x.Z, {
                                                mt: 8,
                                                width: {
                                                    xs: "100%",
                                                    textAlign: "left"
                                                },
                                                children: [(0, i.jsx)($, {
                                                    children: (0, i.jsx)(K.Z, {
                                                        sx: {
                                                            fontSize: "30px"
                                                        }
                                                    })
                                                }), (0, i.jsx)(d.Z, {
                                                    mt: 2,
                                                    variant: "h3",
                                                    sx: {
                                                        fontSize: "24px",
                                                        textAlign: "left"
                                                    },
                                                    children: "Real-time Logs and Metrics"
                                                }), (0, i.jsx)(d.Z, {
                                                    variant: "body1",
                                                    sx: {
                                                        fontSize: "18px",
                                                        textAlign: "left"
                                                    },
                                                    mt: 1,
                                                    children: "Seamlessly debug containers with access to GPU, CPU, Memory, and other metrics. You can monitor logs in real-time."
                                                })]
                                            })]
                                        }), (0, i.jsx)(h.ZP, {
                                            item: !0,
                                            xs: 1
                                        }), (0, i.jsxs)(h.ZP, {
                                            item: !0,
                                            xs: 11,
                                            md: 5.5,
                                            children: [(0, i.jsxs)(x.Z, {
                                                mt: {
                                                    xs: 8,
                                                    md: 0
                                                },
                                                width: {
                                                    xs: "100%",
                                                    textAlign: "left"
                                                },
                                                children: [(0, i.jsx)($, {
                                                    children: (0, i.jsx)(H.Z, {
                                                        sx: {
                                                            fontSize: "30px"
                                                        }
                                                    })
                                                }), (0, i.jsx)(d.Z, {
                                                    mt: 2,
                                                    variant: "h3",
                                                    sx: {
                                                        fontSize: "24px",
                                                        textAlign: "left"
                                                    },
                                                    children: "Eliminate Idle GPU Costs"
                                                }), (0, i.jsx)(d.Z, {
                                                    variant: "body1",
                                                    sx: {
                                                        fontSize: "18px",
                                                        textAlign: "left"
                                                    },
                                                    mt: 1,
                                                    children: "Pay per second. You only pay when your endpoint receives and processes a request."
                                                })]
                                            }), (0, i.jsxs)(x.Z, {
                                                mt: 8,
                                                width: {
                                                    xs: "100%",
                                                    textAlign: "left"
                                                },
                                                children: [(0, i.jsx)($, {
                                                    children: (0, i.jsx)(X.Z, {
                                                        sx: {
                                                            fontSize: "30px"
                                                        }
                                                    })
                                                }), (0, i.jsx)(d.Z, {
                                                    mt: 2,
                                                    variant: "h3",
                                                    sx: {
                                                        fontSize: "24px",
                                                        textAlign: "left"
                                                    },
                                                    children: "Secure and Compliant"
                                                }), (0, i.jsx)(d.Z, {
                                                    variant: "body1",
                                                    sx: {
                                                        fontSize: "18px",
                                                        textAlign: "left"
                                                    },
                                                    mt: 1,
                                                    children: "Serverless is built on enterprise-grade GPUs with world-class compliance and security standards."
                                                })]
                                            }), (0, i.jsxs)(x.Z, {
                                                mt: 8,
                                                width: {
                                                    xs: "100%",
                                                    textAlign: "left"
                                                },
                                                children: [(0, i.jsx)($, {
                                                    children: (0, i.jsx)(M.Z, {
                                                        sx: {
                                                            fontSize: "30px"
                                                        }
                                                    })
                                                }), (0, i.jsx)(d.Z, {
                                                    variant: "h3",
                                                    sx: {
                                                        fontSize: "24px",
                                                        textAlign: "left"
                                                    },
                                                    children: "Lightning Fast Cold-Start"
                                                }), (0, i.jsx)(d.Z, {
                                                    variant: "body1",
                                                    sx: {
                                                        fontSize: "18px",
                                                        textAlign: "left"
                                                    },
                                                    mt: 1,
                                                    children: "With Flashboot, watch your cold-starts drop to sub 500 milliseconds."
                                                }), (0, i.jsx)(x.Z, {
                                                    mt: 5,
                                                    sx: {
                                                        textAlign: "left"
                                                    },
                                                    children: (0, i.jsx)(q.Z, {
                                                        data: t
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                et = n(66242),
                en = n(11703),
                ei = n(40044);

            function es(e) {
                let t = (0, r.useRef)(null),
                    n = () => {
                        t.current && t.current.paused && t.current.play()
                    };
                return (0, r.useEffect)(() => {
                    let e = t.current;
                    return e && e.addEventListener("pause", n), () => {
                        e && e.removeEventListener("pause", n)
                    }
                }, []), (0, i.jsx)(et.Z, {
                    sx: {
                        maxWidth: 690,
                        borderRadius: 2,
                        overflow: "hidden"
                    },
                    children: (0, i.jsx)(x.Z, {
                        sx: {
                            position: "relative",
                            width: "100%",
                            paddingTop: "56.25%",
                            "& video": {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit"
                            }
                        },
                        children: (0, i.jsxs)("video", {
                            ref: t,
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            loading: "lazy",
                            style: {
                                width: "100%",
                                height: "auto"
                            },
                            children: [(0, i.jsx)("source", {
                                src: e.videoSrc,
                                type: "video/mp4"
                            }), "Your browser does not support the video tag."]
                        })
                    })
                })
            }

            function er(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    ref: s,
                    style: r
                } = function() {
                    let {
                        ref: e,
                        inView: t
                    } = (0, p.YD)({
                        triggerOnce: !0,
                        threshold: .1
                    });
                    return {
                        ref: e,
                        style: {
                            opacity: 0,
                            transform: "translateY(20px)",
                            animation: t ? "fadeIn 2s ease-out forwards" : "none",
                            "@keyframes fadeIn": {
                                "0%": {
                                    opacity: 0,
                                    transform: "translateY(20px)"
                                },
                                "100%": {
                                    opacity: 1,
                                    transform: "translateY(0)"
                                }
                            }
                        }
                    }
                }();
                return (0, i.jsx)(d.Z, {
                    ref: s,
                    ...n,
                    sx: { ...n.sx,
                        ...r
                    },
                    children: t
                })
            }

            function eo(e) {
                let {
                    children: t,
                    value: n,
                    index: s,
                    ...r
                } = e;
                return (0, i.jsx)(x.Z, {
                    role: "tabpanel",
                    hidden: n !== s,
                    id: "simple-tabpanel-".concat(s),
                    "aria-labelledby": "simple-tab-".concat(s),
                    ...r,
                    children: n === s && (0, i.jsx)(x.Z, {
                        p: 0,
                        children: (0, i.jsx)("div", {
                            children: t
                        })
                    })
                })
            }
            var el = () => {
                    (0, j.Z)();
                    let [e, t] = (0, r.useState)(0);
                    return (0, i.jsx)(a.Z, {
                        mb: {
                            xs: 20,
                            md: 25
                        },
                        spacing: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        children: (0, i.jsxs)(x.Z, {
                            maxWidth: {
                                xs: "90vw",
                                md: 930
                            },
                            position: "relative",
                            children: [(0, i.jsx)(x.Z, {
                                sx: {
                                    backgroundImage: "url(/static/images/bg.webp)",
                                    backgroundRepeat: "no-repeat",
                                    filter: "blur(60px)",
                                    height: 1e3,
                                    overflowX: "hidden !important",
                                    position: "absolute",
                                    top: -400,
                                    transform: "rotate(130deg)",
                                    width: 900,
                                    zIndex: -1
                                }
                            }), (0, i.jsx)(er, {
                                gutterBottom: !0,
                                mb: 8,
                                variant: "h1",
                                fontSize: {
                                    xs: 32,
                                    sm: 38,
                                    md: 42
                                },
                                textAlign: {
                                    xs: "center",
                                    sm: "center"
                                },
                                sx: {
                                    lineHeight: 1.4,
                                    filter: "drop-shadow(0 0 20px #673AB7)"
                                },
                                children: "Join over 100,000 developers using RunPod"
                            }), (0, i.jsx)(x.Z, {
                                sx: {
                                    display: "flex",
                                    justifyContent: {
                                        xs: "center",
                                        md: "start"
                                    }
                                },
                                children: (0, i.jsxs)(en.Z, {
                                    value: e,
                                    onChange: (e, n) => {
                                        t(n)
                                    },
                                    "aria-label": "The RunPod Ecosystem",
                                    children: [(0, i.jsx)(ei.Z, {
                                        sx: {
                                            fontWeight: 300,
                                            padding: "5px !important",
                                            marginRight: "20px !important"
                                        },
                                        label: "GPU Instances"
                                    }), (0, i.jsx)(ei.Z, {
                                        sx: {
                                            fontWeight: 300,
                                            padding: "5px !important",
                                            marginRight: "20px !important"
                                        },
                                        label: "Serverless"
                                    }), (0, i.jsx)(ei.Z, {
                                        sx: {
                                            fontWeight: 300,
                                            padding: "5px !important"
                                        },
                                        label: "AI Endpoints"
                                    })]
                                })
                            }), (0, i.jsx)(eo, {
                                value: e,
                                index: 0,
                                children: (0, i.jsxs)(h.ZP, {
                                    container: !0,
                                    mt: 0,
                                    children: [(0, i.jsxs)(h.ZP, {
                                        item: !0,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        xs: 12,
                                        md: 6,
                                        sx: {
                                            marginTop: 3,
                                            paddingRight: 3
                                        },
                                        children: [(0, i.jsx)(d.Z, {
                                            gutterBottom: !0,
                                            variant: "h3",
                                            mb: 1,
                                            children: "Launch a GPU instance in seconds"
                                        }), (0, i.jsx)(d.Z, {
                                            sx: {
                                                fontSize: 16,
                                                color: "#CBCCD2"
                                            },
                                            children: "Kickstart your development with minimal configuration using RunPod's on-demand GPU instances. Our platform is engineered to provide you with rapid access to powerful GPUs, facilitating a smooth start for machine learning and AI development."
                                        }), (0, i.jsx)(u.Z, {
                                            href: "/console/gpu-cloud",
                                            sx: {
                                                mt: 2
                                            },
                                            variant: "outlined",
                                            children: "GPU Instances"
                                        })]
                                    }), (0, i.jsx)(h.ZP, {
                                        mt: 3,
                                        item: !0,
                                        xs: 12,
                                        md: 6,
                                        children: (0, i.jsx)(es, {
                                            videoSrc: "/static/images/videos/deploy-pod.mp4"
                                        })
                                    })]
                                })
                            }), (0, i.jsx)(eo, {
                                value: e,
                                index: 1,
                                children: (0, i.jsxs)(h.ZP, {
                                    container: !0,
                                    mt: 0,
                                    children: [(0, i.jsxs)(h.ZP, {
                                        item: !0,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        xs: 12,
                                        md: 6,
                                        sx: {
                                            marginTop: 3,
                                            paddingRight: 3
                                        },
                                        children: [(0, i.jsx)(d.Z, {
                                            gutterBottom: !0,
                                            variant: "h3",
                                            mb: 1,
                                            children: "Create an autoscaling Serverless endpoint for your model"
                                        }), (0, i.jsx)(d.Z, {
                                            sx: {
                                                fontSize: 16,
                                                color: "#CBCCD2"
                                            },
                                            children: "We provide a robust, autoscaling environment that ensures your models are production-ready from day one. RunPod's serverless architecture means you spend less time managing infrastructure and more time focusing on building your application."
                                        }), (0, i.jsx)(u.Z, {
                                            href: "/serverless-gpu",
                                            sx: {
                                                mt: 2
                                            },
                                            variant: "outlined",
                                            children: "Serverless"
                                        })]
                                    }), (0, i.jsx)(h.ZP, {
                                        mt: 3,
                                        item: !0,
                                        xs: 12,
                                        md: 6,
                                        children: (0, i.jsx)(es, {
                                            videoSrc: "/static/images/videos/create-endpoint.mp4"
                                        })
                                    })]
                                })
                            }), (0, i.jsx)(eo, {
                                value: e,
                                index: 2,
                                children: (0, i.jsxs)(h.ZP, {
                                    container: !0,
                                    mt: 0,
                                    children: [(0, i.jsxs)(h.ZP, {
                                        item: !0,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        mt: 0,
                                        xs: 12,
                                        md: 6,
                                        sx: {
                                            marginTop: 3,
                                            paddingRight: 3
                                        },
                                        children: [(0, i.jsx)(d.Z, {
                                            gutterBottom: !0,
                                            variant: "h3",
                                            mb: 1,
                                            children: "Run popular open-source models with our pre-built endpoints"
                                        }), (0, i.jsx)(d.Z, {
                                            sx: {
                                                fontSize: 16,
                                                color: "#CBCCD2"
                                            },
                                            children: "Run popular open-source models like Llama, SDXL, Whisper, and many others with our AI Endpoints. Our endpoints are tailored for instant scalability and high availability, ensuring you can deliver AI services efficiently and reliably to your users."
                                        }), (0, i.jsx)(u.Z, {
                                            href: "/endpoints",
                                            sx: {
                                                mt: 2
                                            },
                                            variant: "outlined",
                                            children: "AI Endpoints"
                                        })]
                                    }), (0, i.jsx)(h.ZP, {
                                        mt: 3,
                                        item: !0,
                                        xs: 12,
                                        md: 6,
                                        children: (0, i.jsx)(es, {
                                            videoSrc: "/static/images/videos/ai-endpoints.mp4"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                ea = n(82729),
                ed = n(66005);

            function ec() {
                let e = (0, ea._)(["\n  0%, 100% {\n    filter: drop-shadow(0 0 200px #121212);\n  }\n  50% {\n    filter: drop-shadow(0 0 300px #121212);\n  }\n"]);
                return ec = function() {
                    return e
                }, e
            }
            let ex = (0, n(70917).F4)(ec());

            function eh(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    ref: s,
                    style: r
                } = function() {
                    let {
                        ref: e,
                        inView: t
                    } = (0, p.YD)({
                        triggerOnce: !0,
                        threshold: .1
                    });
                    return {
                        ref: e,
                        style: {
                            opacity: 0,
                            transform: "translateY(20px)",
                            animation: t ? "fadeIn 2s ease-out forwards" : "none",
                            "@keyframes fadeIn": {
                                "0%": {
                                    opacity: 0,
                                    transform: "translateY(20px)"
                                },
                                "100%": {
                                    opacity: 1,
                                    transform: "translateY(0)"
                                }
                            }
                        }
                    }
                }();
                return (0, i.jsx)(d.Z, {
                    ref: s,
                    ...n,
                    sx: { ...n.sx,
                        ...r
                    },
                    children: t
                })
            }(0, R.ZP)(a.Z)({
                padding: 2,
                overflow: "hidden",
                animation: "".concat(ex, " 14s infinite ease-in-out")
            });
            var em = () => {
                let [e, t] = (0, r.useState)(0);
                (0, ed.vO)({
                    onChange: e => {
                        let {
                            value: {
                                scrollYProgress: n
                            }
                        } = e;
                        t(parseInt(1e3 * n))
                    }
                });
                let n = parseInt(e > 0 ? e / 3 : e);
                return (0, i.jsxs)(a.Z, {
                    mt: 14,
                    justifyContent: "center",
                    alignItems: "center",
                    px: {
                        xs: 1,
                        sm: 2,
                        md: 0
                    },
                    spacing: 8,
                    children: [(0, i.jsxs)(a.Z, {
                        direction: "column",
                        children: [(0, i.jsx)(eh, {
                            gutterBottom: !0,
                            variant: "h1",
                            textAlign: {
                                xs: "center"
                            },
                            fontSize: {
                                xs: "36px",
                                md: "44px"
                            },
                            sx: {
                                lineHeight: 1.4,
                                filter: "drop-shadow(0 0 20px #673AB7)"
                            },
                            children: "Develop, train, and scale AI models."
                        }), (0, i.jsx)(eh, {
                            gutterBottom: !0,
                            variant: "h1",
                            textAlign: {
                                xs: "center"
                            },
                            fontSize: {
                                xs: "36px",
                                md: "44px"
                            },
                            sx: {
                                mb: -6,
                                mt: 2,
                                filter: "drop-shadow(0 0 20px #673AB7)"
                            },
                            children: "All in one cloud."
                        })]
                    }), (0, i.jsx)(ed.a.div, {
                        style: {
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 130,
                            perspective: "1000px"
                        },
                        children: (0, i.jsx)(ed.a.div, {
                            style: {
                                alignItems: "center",
                                border: "solid rgba(255, 255, 255, .9)",
                                borderRadius: "20px",
                                borderWidth: "4px 1px",
                                justifyContent: "center",
                                maxWidth: "100%",
                                opacity: .8,
                                transform: "rotateX(".concat(n <= 50 ? 55 - n : 5, "deg)")
                            },
                            children: (0, i.jsx)("img", {
                                alt: "runpod demo",
                                src: "/static/images/rp.png",
                                style: {
                                    borderRadius: 20,
                                    maxWidth: "100%"
                                }
                            })
                        })
                    }), (0, i.jsx)(x.Z, {
                        pt: {
                            xs: 10
                        },
                        sx: {
                            perspective: "1000px"
                        },
                        children: (0, i.jsx)(ed.a.div, {
                            style: {
                                borderRadius: "20px",
                                marginTop: -180,
                                marginLeft: 9,
                                marginRight: 9,
                                padding: 18
                            },
                            children: (0, i.jsxs)(h.ZP, {
                                container: !0,
                                columns: 12,
                                direction: {
                                    xs: "column",
                                    md: "row"
                                },
                                justifyContent: "center",
                                spacing: 4,
                                textAlign: {
                                    xs: "left",
                                    md: "center"
                                },
                                mt: {
                                    xs: 2,
                                    md: 0
                                },
                                children: [(0, i.jsxs)(h.ZP, {
                                    item: !0,
                                    xs: 3.5,
                                    children: [(0, i.jsx)(d.Z, {
                                        fontSize: {
                                            xs: 20,
                                            sm: 26
                                        },
                                        mb: 2,
                                        variant: "h3",
                                        children: "Develop"
                                    }), (0, i.jsx)(d.Z, {
                                        align: "left",
                                        fontSize: 18,
                                        sx: {
                                            textAlign: "left"
                                        },
                                        children: "With over 50 template environments, you're just three clicks away from a fully configured development workspace."
                                    })]
                                }), (0, i.jsxs)(h.ZP, {
                                    item: !0,
                                    xs: 3.5,
                                    children: [(0, i.jsx)(d.Z, {
                                        fontSize: {
                                            xs: 20,
                                            sm: 26
                                        },
                                        mb: 2,
                                        variant: "h3",
                                        children: "Train"
                                    }), (0, i.jsx)(d.Z, {
                                        sx: {
                                            textAlign: "left"
                                        },
                                        fontSize: 18,
                                        children: "RunPod is engineered to streamline the training process, allowing you to benchmark and train your models efficiently."
                                    })]
                                }), (0, i.jsxs)(h.ZP, {
                                    item: !0,
                                    xs: 3.5,
                                    children: [(0, i.jsx)(d.Z, {
                                        fontSize: {
                                            xs: 20,
                                            sm: 26
                                        },
                                        mb: 2,
                                        variant: "h3",
                                        children: "Scale"
                                    }), (0, i.jsx)(d.Z, {
                                        sx: {
                                            textAlign: "left"
                                        },
                                        fontSize: 18,
                                        children: "Deploy your models to production and scale from 0 to millions of inference requests with our Serverless endpoints."
                                    })]
                                })]
                            })
                        })
                    })]
                })
            };

            function ep(e) {
                let {
                    data: t
                } = e;
                return (0, i.jsxs)(s.Z, {
                    sx: {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: 1050
                    },
                    children: [(0, i.jsx)(V, {
                        data: t
                    }), (0, i.jsx)(em, {}), (0, i.jsx)(A, {
                        data: t
                    }), (0, i.jsx)(ee, {
                        data: t
                    }), (0, i.jsx)(el, {}), (0, i.jsx)(D, {})]
                })
            }
        },
        12013: function(e, t, n) {
            var i = n(85893),
                s = n(51233),
                r = n(15861),
                o = n(67720),
                l = n(51006);
            t.Z = e => {
                var t, n, a, d, c, x, h, m, p, u, f, g, j, v, Z, y;
                let {
                    data: b
                } = e, w = (null == b ? void 0 : null === (n = b.sd) || void 0 === n ? void 0 : null === (t = n.data) || void 0 === t ? void 0 : t.length) > 0 && (null == b ? void 0 : null === (a = b.sd) || void 0 === a ? void 0 : a.data[0].p90) > 0 ? parseInt(null == b ? void 0 : null === (d = b.sd) || void 0 === d ? void 0 : d.data[0].p90) : 3e3, S = (null == b ? void 0 : null === (x = b.sd) || void 0 === x ? void 0 : null === (c = x.data) || void 0 === c ? void 0 : c.length) > 0 && (null == b ? void 0 : null === (h = b.sd) || void 0 === h ? void 0 : h.data[0].p70) > 0 ? parseInt(null == b ? void 0 : null === (m = b.sd) || void 0 === m ? void 0 : m.data[0].p70) : 3e3, I = (null == b ? void 0 : null === (u = b.whisper) || void 0 === u ? void 0 : null === (p = u.data) || void 0 === p ? void 0 : p.length) > 0 && (null == b ? void 0 : null === (f = b.whisper) || void 0 === f ? void 0 : f.data[0].p90) > 0 ? parseInt(null == b ? void 0 : null === (g = b.whisper) || void 0 === g ? void 0 : g.data[0].p90) : 3e3, z = (null == b ? void 0 : null === (v = b.whisper) || void 0 === v ? void 0 : null === (j = v.data) || void 0 === j ? void 0 : j.length) > 0 && (null == b ? void 0 : null === (Z = b.whisper) || void 0 === Z ? void 0 : Z.data[0].p70) > 0 ? parseInt(null == b ? void 0 : null === (y = b.whisper) || void 0 === y ? void 0 : y.data[0].p70) : 3e3;
                return (0, i.jsxs)(s.Z, {
                    alignItems: "center",
                    direction: "row",
                    spacing: {
                        xs: 3,
                        sm: 5,
                        md: 4
                    },
                    children: [(0, i.jsxs)(s.Z, {
                        spacing: .3,
                        children: [(0, i.jsxs)(r.Z, {
                            color: "white",
                            sx: {
                                alignItems: "center",
                                display: "flex",
                                fontSize: 20,
                                justifyContent: "center"
                            },
                            children: [(0, i.jsx)(l.Z, {
                                sx: {
                                    fontSize: 22
                                }
                            }), "FlashBoot"]
                        }), (0, i.jsx)(o.Z, {
                            sx: {
                                backgroundColor: "#824edc"
                            }
                        }), (0, i.jsx)(r.Z, {
                            color: "white",
                            fontSize: 16,
                            pl: 1,
                            pt: 1,
                            children: "P70 Cold-Start"
                        }), (0, i.jsx)(r.Z, {
                            fontSize: 16,
                            pl: 1,
                            children: "P90"
                        })]
                    }), (0, i.jsxs)(s.Z, {
                        spacing: .3,
                        children: [(0, i.jsx)(r.Z, {
                            align: "center",
                            sx: {
                                fontSize: 20
                            },
                            children: "StableDiffusion"
                        }), (0, i.jsx)(o.Z, {
                            sx: {
                                backgroundColor: "#824edc"
                            }
                        }), (0, i.jsxs)(r.Z, {
                            color: "white",
                            fontSize: 16,
                            pt: 1,
                            children: [S.toLocaleString(), "ms"]
                        }), (0, i.jsxs)(r.Z, {
                            fontSize: 16,
                            children: [w.toLocaleString(), "ms"]
                        })]
                    }), (0, i.jsxs)(s.Z, {
                        spacing: .3,
                        display: {
                            xs: "none",
                            md: "flex"
                        },
                        children: [(0, i.jsx)(r.Z, {
                            align: "center",
                            sx: {
                                fontSize: 20
                            },
                            children: "Whisper"
                        }), (0, i.jsx)(o.Z, {
                            sx: {
                                backgroundColor: "#824edc"
                            }
                        }), (0, i.jsxs)(r.Z, {
                            color: "white",
                            fontSize: 16,
                            pt: 1,
                            children: [z.toLocaleString(), "ms"]
                        }), (0, i.jsxs)(r.Z, {
                            fontSize: 16,
                            children: [I.toLocaleString(), "ms"]
                        })]
                    })]
                })
            }
        },
        25601: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var i = n(85893),
                s = n(51233),
                r = n(99332),
                o = n(87357),
                l = n(15861),
                a = n(67294),
                d = n(50893),
                c = n(17857),
                x = n(67616),
                h = n.n(x),
                m = n(62730),
                p = n(24382),
                u = n.n(p);
            let f = h()();

            function g(e) {
                var t, n;
                let {
                    data: x,
                    requestProps: h
                } = e, p = (0, a.useRef)(null), [g, j] = (0, a.useState)(0), v = u()(f), {
                    data: Z
                } = (0, m.ZP)("https://api.runpod.ai/metrics", {
                    cachePolicy: "no-cache"
                }, [v]);
                return (0, d.Y)(() => f(), 2e3), (0, a.useEffect)(() => {
                    j(p.current ? p.current.offsetWidth : 0)
                }, [p]), (0, i.jsx)(s.Z, {
                    alignItems: "left",
                    justifyContent: "center",
                    children: (0, i.jsx)(r.Z, {
                        title: "Total requests since launch (Jan 2023).",
                        children: (0, i.jsxs)(o.Z, {
                            minWidth: 210,
                            ref: p,
                            width: 0 === g ? void 0 : g + 15,
                            children: [(0, i.jsx)(l.Z, {
                                color: "white",
                                fontSize: {
                                    xs: 28,
                                    sm: 30
                                },
                                children: (0, i.jsx)(c.ZP, {
                                    decimals: 0,
                                    delay: 0,
                                    duration: 3,
                                    end: (null == Z ? void 0 : Z.requests) || (null == x ? void 0 : null === (t = x.metrics) || void 0 === t ? void 0 : t.requests),
                                    preserveValue: !0,
                                    separator: ",",
                                    start: (null == x ? void 0 : null === (n = x.metrics) || void 0 === n ? void 0 : n.requests) - 500
                                })
                            }), (0, i.jsx)(l.Z, {
                                color: "white",
                                fontSize: 20,
                                variant: "subtitle1",
                                ...h,
                                children: "requests"
                            })]
                        })
                    })
                })
            }
        },
        50893: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return s
                }
            });
            var i = n(67294);

            function s(e, t) {
                let n = (0, i.useRef)(e);
                (0, i.useLayoutEffect)(() => {
                    n.current = e
                }, [e]), (0, i.useEffect)(() => {
                    if (!t && 0 !== t) return;
                    let e = setInterval(() => n.current(), t);
                    return () => clearInterval(e)
                }, [t])
            }
        }
    }
]);