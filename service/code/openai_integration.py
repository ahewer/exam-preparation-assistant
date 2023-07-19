from enum import Enum

import openai
from pydantic import BaseModel


# OpenAI erwartet eine Rolle für jede Nachricht
class MessageRole(str, Enum):
    # Das ist die SYSTEM Rolle, die angibt, wie sich das System verhalten soll
    SYSTEM = "system"
    # Alle Nachrichten, die vom Benutzer kommen, haben die USER Rolle
    USER = "user"
    # Alle Antworten, die vom System kommen, haben die ASSISTANT Rolle
    ASSISTANT = "assistant"


class Message(BaseModel):
    role: MessageRole
    content: str


# Sendet die gesamte Unterhaltung zu ChatGPT
def conversation(messages: [Message]) -> [Message]:
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=list(map(lambda message: message.__dict__, messages)),
        # Hier kann man eventuell herumspielen:
        # Größere Werte bedeuten, dass das System sehr kreativ sein darf (produziert unter Umständen auch Quatsch)
        temperature=0.8,
    )

    messages.append(Message(role=MessageRole.ASSISTANT, content=response["choices"][0]['message']['content']))
    return messages


def init_assistant() -> [Message]:
    system_message = Message(
        role=MessageRole.SYSTEM,
        # Bitte überlegen, wie die SYSTEM Nachricht aussehen könnte.
        # Beispiel: Du bist ein Assistent, der mir bei Klassenarbeiten hilft.
        content="""
???
""")
    return conversation([system_message])
