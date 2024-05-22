interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
   
  return (
    <span className="mr-3 text-sm font-medium lowercase text-primary-600 hover:text-primary-700 dark:hover:text-primary-700">
      {text}
    </span>
  )
}

export default Tag
