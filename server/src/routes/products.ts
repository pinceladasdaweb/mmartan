import { Request, Response } from "express";
import { ProductController } from "../controllers/productController";

export class Routes {
  public productsController: ProductController = new ProductController()

  public routes(app): void {      
    app.all('*', function(req, res, next) {
     res.header('Access-Control-Allow-Origin', '*');
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header('Access-Control-Allow-Headers', 'Content-Type');
     next();
    });
        
    app.route('/')
    .get((req: Request, res: Response) => {            
      res.status(200).send({
        status: '😉'
      })
    })

    app.route('/products')
    .get(this.productsController.getProducts)
  }
}
