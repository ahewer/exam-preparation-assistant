from controller_models import ExamPreparationRequest, ExamPreparation
from openai_integration import init_assistant, Message, MessageRole, conversation


# Prompt, um eine Lernplan-Empfehlung vom System zu erhalten
def create_learning_plan_prompt(body: ExamPreparationRequest):
    return Message(
        role=MessageRole.USER,
        # Wie kann ich das System dazu bringen, mir einen Lernplan zu erstellen?
        content=f"""
        ???
"""
    )


def send_exam_preparation_request(body: ExamPreparationRequest):
    # Kommentare entfernen, sobald Prompt fertig ist
    # messages = init_assistant()
    # messages.append(create_learning_plan_prompt(body))
    # messages = conversation(messages)
    # preparation = messages[-1].content

    # Das Ergebnis muss nicht zwangsläufig nur den Lernplan enthalten
    result = ExamPreparation(
        learningPlan=body.examField,
    )
    return result
