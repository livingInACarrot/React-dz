import './styles.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IArticle } from '../Article/IArticle.tsx';

const Article = ({ title, body, isOdd }: IArticle) => {
  return (
    <div className="accordion">
      <Accordion
        style={{
          backgroundColor: isOdd ? 'black' : 'darkblue',
          color: 'white',
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {title}
        </AccordionSummary>
        <AccordionDetails>
          <p>{body}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Article;
