import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ShowForm = (props) => {
  return (
    <div style={{display:props.displayValue}}>
      <Form style={styles} >
        <div style={{display:"flex", justifyContent:"space-between", fontSize:"20px", textAlign:"center", padding:"0 20px", marginBottom:"20px", fontWeight:"bold"}}>
          <div>Generate the Right Show for you</div>
          <div>x</div>
        </div>
        <Form.Group className="mb-3" >
          <Form.Label>How are you feeling right now?</Form.Label>
          <Form.Control size="sm" type="text" placeholder="describe briefly" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>How would you like to feel after the movie?</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Feel good, content, cathartic or contemplate life and existence!" />
        </Form.Group>

        
        <Button variant="primary" type="submit">
          Generate
        </Button>
      </Form>
    </div>
  );
}
const styles = {
  backgroundColor: "rgba(255,255,255,0.1)",
  width:"30%",
  padding:"30px",
  margin:"20px auto",
}
export default ShowForm;