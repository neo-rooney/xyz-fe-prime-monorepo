const { build } = require("esbuild");

const run = ({ entryPoints = ["src/index.ts"], pkg, config = {} }) => {
  /**
   * minify는 또 다른 변환 작업이 필요하므로 빠른 개발환경을 위해서 개발 모드에서는 minify를 사용하지 않는다.
   */
  const dev = process.argv.includes("--dev");
  const minify = !dev;

  /**
   * watch 모드 코드가 변경되었을 때 빌드가 바로 실행되는 모드
   * esbuild 17 버전부터는 따로 watch 함수를 실행시켜야하지만
   * 16버전에서는 config의 옵션으로 넘겨주면 watch 모드 실행가능
   */
  const watch = process.argv.includes("--watch");

  /**
   * 외부 모듈 처리(번들링 결과에 포함되지 않아도 되는 것들)
   * dependencies(peerDependencies)에 있는 것들은 라이브러리의 번들에 포함되지 않지만, 런타임에 node_modules 폴더에서 로드되야 해서 external 처리
   * devDependencies는 개발 환경에서만 필요한 패키지로, 번들에 포함될 필요도 없고 런타임에 로드될 필요도 없다.(external 처리X)
   */

  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

  const baseConfig = {
    entryPoints,
    bundle: true,
    minify,
    sourcemap: true,
    outdir: "dist",
    target: "es2019",
    watch,
    external,
    ...config,
  };

  Promise.all([
    build({
      ...baseConfig,
      format: "esm",
    }),
    build({
      ...baseConfig,
      format: "cjs",
      outExtension: {
        ".js": ".cjs",
      },
    }),
  ]).catch(() => {
    console.error("Build failed");
    process.exit(1);
  });
};

module.exports = run;
