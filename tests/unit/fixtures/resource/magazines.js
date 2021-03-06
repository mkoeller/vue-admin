import CreateMagazines from '@/../demo/components/magazines/CreateMagazines'
import EditMagazines from '@/../demo/components/magazines/EditMagazines'
import ListMagazines from '@/../demo/components/magazines/ListMagazines'
import ShowMagazines from '@/../demo/components/magazines/ShowMagazines'
import defaults from '@components/Resource/src/defaults'
import { Types } from '@store/modules/resources'

const { namespace, RESOURCES_ADD_ROUTE } = Types

export default {
  props: Object.assign({}, defaults().props, {
    name: 'magazines',
    apiUrl: 'http://localhost:8888',
    resourceIdName: defaults().props.resourceIdName,
    userPermissionsField: defaults().props.userPermissionsField,
    create: CreateMagazines,
    edit: EditMagazines,
    list: ListMagazines,
    show: ShowMagazines,
    redirect: defaults().props.redirect(),
    parseResponses: defaults().props.parseResponses(),
  }),
  methods: {
    storeMethods: {
      [`${namespace}/${RESOURCES_ADD_ROUTE}`]: {
        params: {
          path: '/magazines',
          name: 'magazines',
        },
      },
    },
  },
}
