import { IPic } from "../entities/pic.interface";
import data from "../server/data/data";

class PicService {
  private picData: any;

  constructor(picData: any) {
    this.picData = data;
  }

  public getPics(): IPic[] {
    const { pics } = this.picData;
    pics.map(
      (pic: IPic): IPic => {
        pic.visible = true;
        return pic;
      }
    );
    return pics;
  }
}

export const picService = new PicService(data);
