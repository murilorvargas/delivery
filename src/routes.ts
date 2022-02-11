import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableDeliveriesController } from "./modules/deliveries/useCases/findAllAvailableDeliveries/FindAllAvailableDeliveriesController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases//updateDeliveryman/UpdateDeliverymanController";
import { FindAllDeliveriesClientController } from "./modules/clients/useCases/findAllDeliveries/FindAllDeliveriesClientController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases//updateEndDate/UpdateEndDateController";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";

const routes = Router()

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableDeliveriesController = new FindAllAvailableDeliveriesController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesClientController = new FindAllDeliveriesClientController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client", createClientController.handle)

routes.post("/client/authenticate", authenticateClientController.handle)

routes.post("/deliveryman", createDeliverymanController.handle)

routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)

routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle)

routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableDeliveriesController.handle)

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)

routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesClientController.handle)

routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle)

routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle)

export { routes }