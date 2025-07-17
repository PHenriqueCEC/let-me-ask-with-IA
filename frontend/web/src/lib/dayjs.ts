import lib from 'dayjs'
import 'dayjs/locale/pt-BR'
import relativeTime from 'dayjs/plugin/relativeTime'

lib.locale('pt-BT')
lib.extend(relativeTime)

export const dayjs = lib