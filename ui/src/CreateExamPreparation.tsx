import {Form, Input, InputNumber, Modal} from "antd";

const { TextArea } = Input;

// Momentan gibt es nur ein Feld: Fach der Klassenarbeit
// Bitte weitere Felder hinzufügen
const CreateExamPreparation = ({ open, onCreate, values}: any) => {
    const [form] = Form.useForm();
    return (
        <Modal
            open={open}
            title="Neue Klassenarbeit"
            okText="OK"
            cancelButtonProps={{
                style: {
                    display: "none",
                },
            }}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log("Validate Failed:", info);
                    });
            }}
        >
            <Form fields={values} form={form} layout="vertical" name="form_in_modal">
                <Form.Item
                    name="field"
                    label="Fach"
                    rules={[
                        {
                            required: true,
                            message: "Bitte gib das Fach der Klassenarbeit an.",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default CreateExamPreparation;
