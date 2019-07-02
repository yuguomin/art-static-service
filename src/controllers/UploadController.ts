import { Controller, Body, Post, Put, UploadedFile } from 'routing-controllers';
import * as fs from 'fs';
import * as path from 'path';
import { mkdirsSync } from '../utils/mkdirsSync';
import { STATIC_FOLDER_PATH } from '../constant/ApiConstant';

@Controller()
export class UserController {
  @Post("/upload_static")
  uploadedFileInPost(@UploadedFile("file") file: any, @Body() body) {
    if (mkdirsSync(STATIC_FOLDER_PATH + body.path)) {
      const distPath = path.join(process.cwd(), STATIC_FOLDER_PATH + body.path, file.originalname);
      const writeSteam = fs.createWriteStream(distPath);
      writeSteam.write(file.buffer, (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });
    }
    return "file written successfully";
  }

  @Put("/upload_static")
  uploadedFileInPut(@UploadedFile("file") file: any, @Body() body) {
    if (mkdirsSync(STATIC_FOLDER_PATH + body.path)) {
      const distPath = path.join(process.cwd(), STATIC_FOLDER_PATH + body.path, file.originalname);
      const writeSteam = fs.createWriteStream(distPath);
      writeSteam.write(file.buffer, (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });
    }
    return "file written successfully";
  }
}