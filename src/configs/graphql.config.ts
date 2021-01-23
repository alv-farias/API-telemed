import {GqlModuleOptions} from '@nestjs/graphql';
import * as config from 'config';

const configs = config.get('graphql');


export default {
    ...configs,
     autoSchemaFile: true

} as GqlModuleOptions;