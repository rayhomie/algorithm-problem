const defaultConfig = [
  {
    path: "/shopList",
    component: "./login/shopList",
  },
  {
    path: "/",
    component: "../layouts/index",
    routes: [
      {
        path: "/editorActionWrapTest",
        component: "./editorActionWrapTest",
      },
      {
        name: "数据统计",
        path: "/data",
        icon: "icon-ico-pie",
        routes: [
          {
            name: "数据看板",
            path: "/data/dashboard",
            component: "./Data/dashboard",
          },
          {
            name: "接待统计",
            path: "/data/receive",
            auth: {
              hidePlatform: ["jdzy", "pdd", "jd"],
            },
          },
          {
            name: "售后统计",
            path: "/data/afterSale",
            routes: [
              {
                name: "售后统计",
                path: "/data/afterSale/rate",
                component: "./Data/afterSale",
                hideInBreadcrumb: true,
              },
            ],
          },
        ],
      },
      {
        name: "404",
        component: "404",
      },
    ],
  },
];

function configToComponent(config, isRoutes) {
  let result = [];
  if (Array.isArray(config)) {
    for (let key in config) {
      if (isRoutes === "routes") {
        result.push(`<Route ${configToComponent(config[key])} />`);
      } else {
        result.push(configToComponent(config[key]));
      }
    }
  } else if (Object.prototype.toString.call(config) === "[object Object]") {
    for (let key in config) {
      if (key === "routes") {
        result.push(
          `${"children"}='${configToComponent(config[key], "routes")}'`
        );
      } else {
        result.push(`${key}='${configToComponent(config[key])}'`);
      }
    }
  } else {
    result = config;
  }
  return result.toString();
}

console.log(configToComponent(defaultConfig, "routes"));
