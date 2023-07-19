import React, {useState} from 'react';
import {Skeleton, Tabs, TabsProps} from 'antd';
import ReactMarkdown from 'react-markdown';
import CreateExamPreparation from "./CreateExamPreparation";
import {Configuration, ExamApi} from "./api-client";
import {SkeletonParagraphProps} from "antd/es/skeleton/Paragraph";

const ExamPreparation = () => {

    const props: SkeletonParagraphProps = {rows: 20}
    const [content, setContent] = useState("")

    // Wir möchten den Dialog anfangs anzeigen
    const [showModal, setShowModal] = useState(true)
    const [editValues] = useState({})
    const [loading, setLoading] = useState(false)
    const [exam, setExam] = useState(Object)

    const defaultApi = new ExamApi(new Configuration({
        basePath: "http://localhost:8000",
    }));

    const onCreate = async (values: any) => {
        setShowModal(false)
        setLoading(true)
        // Hier wird unsere API aufgerufen und der Request zusammengebaut
        let result = await defaultApi.sendExamPreparationRequest(
            {
                examField: values["field"]
            }
        )
        setLoading(false)
        setExam(result.data)
        setContent(result.data["learningPlan"])
    }

    // Momentan gibt es nur den Lernplan, bitte entsprechend erweitern
    const items: TabsProps['items'] = [
        {
            key: 'learningPlan',
            label: `Lernplan`,
            children: <ReactMarkdown>{content}</ReactMarkdown>
        },
    ];

    // Zeige einen anderen Inhalt an, sobald der Tab gewechselt wird
    const onChange = (key: string ) => {
        setContent(exam[key])
    };

    // Abhängig von loading wird eine Ladeanimation angezeigt oder das Ergebnis
    if(loading) {
        return (
            <div>
            <Skeleton active={true} paragraph={props}/>
            </div>
    )
    } else {

        return (
            <div>
                <CreateExamPreparation open={showModal} onCreate={(values: any) => onCreate(values)}
                                       values={editValues}></CreateExamPreparation>
                <Tabs defaultActiveKey="learningPlan" items={items} onChange={onChange}/>
            </div>
        );
    }
}

export default ExamPreparation
