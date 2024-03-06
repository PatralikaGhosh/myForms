import React, {useState, useEffect} from 'react';
import './Question_form.css';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import Select from  '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ShortTextIcon from '@material-ui/icons/ShortText';
import SubjectIcon from '@material-ui/icons/Subject';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {BSTrash, BsTrash} from 'react-icons/bs';
import { IconButton } from '@material-ui/core';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import {BsFileText} from 'react-icons/bs';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Button } from '@material-ui/core';
import {FcRightUp} from 'react-icons/fc';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Question_form() {
    const [questions,setQuestions] = useState(
        [{questionText: "Untitled Question",
        questionType: "radio",
        options :[
        {optionText: "Option 1"},
        {optionText: "Option 2"}
        ],

        open:true,
        required:false
        }]
    )
    function changeQuestion(value, index){
        var newQuestions = [...questions];
        newQuestions[index].questionText = value;
        setQuestions(newQuestions);
    }

    function addQuestionType(i,type){
        let newQuestions = [...questions];
        newQuestions[i].questionType = type;
        setQuestions(newQuestions);
    }

    function changeOptionValue(value, i, j){
        var optionsQuestions = [...questions];
        optionsQuestions[i].options[j].optionText = value;
        setQuestions(optionsQuestions);
    }
    function removeOption(i,j){
        var removeOption = [...questions];
        if(removeOption[i].options.length > 1){
            removeOption[i].options.splice(j,1);
            setQuestions(removeOption);
        }
    }

    function addOption(i){
        var optionsOfQuestion = [...questions];
        if(optionsOfQuestion[i].options.length < 5){
            optionsOfQuestion[i].options.push({optionText: "Option " + (optionsOfQuestion[i].options.length + 1)});
            
        }
        setQuestions(optionsOfQuestion);
    }

    function copyQuestion(i){
        //expandCloseAll(i);
        var copyQuestions = [...questions];
        var newQuestions = copyQuestions[i];
        setQuestions([...questions, newQuestions]);
    }

    function deleteQuestion(i){
        var deleteQuestions = [...questions];
        if(questions.length > 1){
            deleteQuestions.splice(i,1);
        }
        setQuestions(deleteQuestions);
    }

    function requiredQuestion(i){
        var requiredQuestions = [...questions];
        requiredQuestions[i].required = !requiredQuestions[i].required;
        setQuestions(requiredQuestions);
    }

    function addMoreQuestion(){
        setQuestions([...questions, {questionText: "Untitled Question", questionType: "radio", options :[{optionText: "Option 1"}], open:true, required:false}]);
    }

    function onDragEnd(result){ 
        if(!result.destination) return;

        var items = [...questions];
        const itemF = reorder(items, result.source.index, result.destination.index);
        setQuestions(itemF);
    }

    function questionsUI() {
        return questions.map((ques, i) => (
            <div> 
                <Accordion expanded={questions[i].open} className={questions[i].open ? 'add_border' : ""}>
                    <AccordionSummary
                        aria-controls="panel-content" 
                        id="panel1a-header"
                        elevation={1} style={{ width: '100%' }}>
                        {questions[i].open ? (
                            <div className="saved_questions">
                                <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: '24px', paddingBottom: "8px" }}>
                                    {i + 1}.{questions[i].questionText}
                                </Typography>
                                {ques.options.map((op, j) => (
                                    <div key={j}> 
                                        <div style={{ display: 'flex' }}>
                                            <FormControlLabel style={{ marginLeft: "5px", marginBottom: "5px" }} disabled control={<input type={ques.questionType} color="primary" style={{ marginRight: '3px' }} required={ques.type} />}
                                                label={
                                                    <Typography style={{ fontFamily: 'Roboto,Arial,sans-serif', fontSize: '13px', fontWeight: '400', letterSpacing: '.2px', lineHeight: '20px', color: '#202124' }}>
                                                        {ques.options[j].optionText}
                                                    </Typography>
                                                } />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : ""}
                    </AccordionSummary>
                    <div className="question_boxes">
                        <AccordionDetails className="add_question">
                            <div className="add_question_top">
                                <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value, i)}}></input>
                                <CropOriginalIcon style={{ color: "grey" }} />
                                <Select className="select" style={{color:"#5f6368", fontSize:"13px"}}>
                                    <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text")}}><SubjectIcon style={{marginRight:"10px"}}/>Paragraph</MenuItem>
                                    <MenuItem id="checkbox" value="Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}}><CheckBoxIcon style={{marginRight:"10px", color:'#70757a'}} checked/>Checkboxes</MenuItem>
                                    <MenuItem id="radio" value="Radio" onClick={()=>{addQuestionType(i,"radio")}}><Radio style={{marginRight:"10px", color:'#70757a'}}checked/>Multiple Choice</MenuItem>
                                </Select>
                            </div>
                            {ques.options.map((op, j) => (
                                <div className="add_question_body" key={j}>
                                    {
                                        (ques.questionType != "text") ? 
                                        <input type={ques.questionType} style={{marginRight:"10px"}} />: 
                                        <ShortTextIcon style={{marginRight:"10px"}} />
                                    }
                                    <div>
                                        <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e)=>{changeOptionValue(e.target.value,i,j)}}></input>
                                    </div>
                                    <CropOriginalIcon style={{color:"#5f6368"}}/>
                                    <IconButton aria-label="delete">
                                        <CloseIcon onClick={()=>{removeOption(i,j)}}/>
                                    </IconButton>
                                </div>  
                            ))}

                            {
                                ques.options.length < 5 ? (
                                    <div className="add_question_body">
                                        <FormControlLabel disabled control={
                                            (ques.questionType!="text") ?
                                            <input type={ques.questionType} color="primary" inputProps={{'aria=label': 'secondary checkbox'}} style={{marginLeft:"10px", marginRight:"10px"}} disabled/>:
                                            <ShortTextIcon style={{marginRight:"10px"}}/>
                                        }
                                        label={
                                        <div>
                                            <input type="text" className="text_input" style={{fontSize:"13px",width:"60px"}} placeholder="Add Other"/>
                                            <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform:'none', color:"#4285f4", fontSize:"13px", fontWeight:"600"}}>Add Option</Button>
                                        </div>
                                        } />
                                    </div>
                                ): ""}

                            <div className="add_footer">
                                <div className="add_question_bottom_left">
                                    <Button size="small" style={{textTransform: 'none', color:"#4285f4", fontSize:"13px",fontWeight:"600"}}>
                                        <FcRightUp style={{border:"2px solid #4285f4", padding:'2px', marginRight:"8px"}} /> Answer key </Button>
                                </div>
                                <div className="add_question_bottom">
                                    <IconButton aria-label="Copy" onClick={()=>{copyQuestion(i)}}>
                                        <FilterNoneIcon/>
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}}>
                                        <BsTrash/>
                                    </IconButton>
                                    <span style={{color:"#5f6368", fontSize:"13px"}}> Required</span>                 
                                    <Switch name="checkedA" color="primary" onClick={()=>{requiredQuestion(i)}}checked={ques.required}/>                                 
                                     <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                </div>
                            </div>
                        </AccordionDetails>
                        <div className="question_edit">
                            <AddCircleOutlineIcon className="edit" onClick={()=>{addMoreQuestion()}}/>
                            <OndemandVideoIcon className="edit"/>
                            <TextFieldsIcon className="edit"/>
                            <CropOriginalIcon className="edit"/>
                        </div>
                    </div>
                </Accordion>
            </div>
        ));
    }
  return (
    <div>
        <div className="question_form">
            <br></br>
            <div className="section">
                <div className="question_title_section">
                    <div className="question_form_top">
                        <input type="text" className="question_form_top_name" style={{color:"black"}} placeholder="Untitled document"></input>
                        <input type="text" className="question_form_top_desc" style={{color:"black"}} placeholder="Form Description"></input>
                    </div>
                </div>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {questionsUI()}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    </div>
  );
}

export default Question_form;