import { useRoomQuestions } from '@/http/use-room-questions'
import { QuestionItem } from './question-item'

interface QuestionListProps { //Recebe uma propriedade obrigatória
  roomId: string
}

export function QuestionList(props: QuestionListProps) {
  const { data } = useRoomQuestions(props.roomId)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {data?.map((question) => { //Coloca o ? pois ele pode ser sempre undefined se a query não tiver terminado
        return <QuestionItem key={question.id} question={question} />
      })}
    </div>
  )
}