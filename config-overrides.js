const {
  override,
  addWebpackAlias,
  addLessLoader,
  fixBabelImports,
} = require("customize-cra");

const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "lib",
    style: "css",
  }),

  /**
   * https://github.com/arackaf/customize-cra/blob/master/api.md#addlessloaderloaderoptions
   * 前往customize-cra 查看更多配置信息
   * addLessLoader less不同版本配置的方式不同
   * 具体查阅 https://github.com/ant-design/ant-design/issues/23624
   */
  addLessLoader({
    //less-loader@5
    // javascriptEnabled: true,
    // modifyVars: {
    //   "@primary-color": "#1DA57A",
    // },
    // less-loader@>6
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#1DA57A" },
    },
  }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
  })
);
