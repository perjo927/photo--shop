import { IPic } from "../entities/pic.interface";
import { getData } from "../graphql/index";

const queryPics = `{ 
  pics {
    id
    title
    size
    path
    type
    material
    measure
    price
    link
  }
}`;

class PicService {
  public getPic(id: string): IPic {
    return getData(this.queryPic(id)).then(
      (response: any): void => {
        return response;
      }
    );
  }

  public getPics(): IPic[] {
    return getData(queryPics).then(
      (response: any): void => {
        const { pics } = response.data;
        const result = pics.map(
          (pic: IPic): IPic => {
            pic.visible = true;
            return pic;
          }
        );
        return result;
      }
    );
  }

  private queryPic = (id: string) => `{ 
    picture(id: "${id}") {
      id
      title
      size
      path
      type
      material
      measure
      price
      link
    }
  }`;
}

export const picService = new PicService();
