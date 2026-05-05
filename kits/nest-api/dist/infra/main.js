"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors_1 = require("../setup/cors");
const env_service_1 = require("./env/env.service");
const global_prefix_1 = require("../setup/global-prefix");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const env = app.get(env_service_1.EnvService);
    const cors = new cors_1.Cors(app, env);
    cors.setup();
    const globalPrefix = new global_prefix_1.GlobalPrefix(app, env);
    globalPrefix.setup();
    await app.listen(env.get('PORT'));
}
bootstrap()
    .then(() => {
    console.log(`App running on port ${process.env.PORT}`);
})
    .catch((error) => {
    console.log(error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map