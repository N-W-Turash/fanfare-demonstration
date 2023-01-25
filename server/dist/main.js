"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const port = process.env.PORT || 8000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(port);
    common_1.Logger.log(`App running on PORT - ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map