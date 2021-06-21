import { ArrowSVG, Button } from "./CustomElements"

interface ArrowProps {
  expand: boolean,
  hasChild: boolean
  handleExpand: () => void
}

export const Arrow: React.FC<ArrowProps> = ({expand, handleExpand, hasChild}) => {
  return (
    <Button onClick={handleExpand}>  
      <ArrowSVG expand={expand} hasChild={hasChild} viewBox="0 0 100 100">
        <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
      </ArrowSVG>
    </Button>
  )
}