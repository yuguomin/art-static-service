import { Controller, Body, Post, Put, UploadedFile } from 'routing-controllers';
import * as fs from 'fs';
import * as path from 'path';
import { mkdirsSync } from '../utils/mkdirsSync';

@Controller()
export class UserController {
  @Post("/upload_static")
  uploadedFileInPost(@UploadedFile("file") file: any, @Body() body) {
    if (mkdirsSync('./static/' + body.path)) {
      const distPath = path.join(process.cwd(), './static/' + body.path, file.originalname);
      const writeSteam = fs.createWriteStream(distPath);
      writeSteam.write(file.buffer, (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('file written successfully');
      });
    }
    return "file written successfully";
  }

  @Put("/upload_static")
  uploadedFileInPut(@UploadedFile("file") file: any, @Body() body) {
    if (mkdirsSync('./static/' + body.path)) {
      const distPath = path.join(process.cwd(), './static/' + body.path, file.originalname);
      const writeSteam = fs.createWriteStream(distPath);
      writeSteam.write(file.buffer, (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('file written successfully');
      });
    }
    return "file written successfully";
  }
}