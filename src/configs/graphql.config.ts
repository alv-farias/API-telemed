import * as config from 'config';
import {GqlModuleOptions} from '@nestjs/graphql';
import { RolesResolver } from 'src/enums/role.enum';

const configs = config.get('graphql');


export default {
    ...configs,
     autoSchemaFile: true,
     resolvers: {
         Roles: RolesResolver,
     },
     context:({req, connection }) => connection ? { req: connection.context} : { req },

} as GqlModuleOptions;