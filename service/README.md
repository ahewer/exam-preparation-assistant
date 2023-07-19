# Service des Assistenten

Wir nutzen Python und [Fast API](https://fastapi.tiangolo.com/), um das Backend von unserem 
Assistenten zur Verfügung zu stellen.

Das Projekt lässt sich gut über PyCharm starten.
Alternativ kann auch die Konsole genutzt werden:

```
pip install --no-cache-dir --upgrade -r /code/requirements.txt
python code/main.py
```

Wichtig: Euer OpenAI API Key muss über die Umgegbungsvariable OPENAI_API_KEY gesetzt werden.

## Aufgaben

Prompts erstellen und Ergebnisse über die API zurückgeben.