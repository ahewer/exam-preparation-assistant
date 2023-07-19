# Prototyp: Persönlicher Assistent zur Vorbereitung auf Klassenarbeiten

## Nötige API Keys

https://platform.openai.com/

## Nötige Tools

### Python 3.11

https://www.python.org/downloads/

### Fast-API Codegen

```pip install fastapi-code-generator```

### Java 17

https://www.azul.com/downloads/?package=jdk#zulu

### NodeJs

https://nodejs.org/en/download

### Yarn

https://yarnpkg.com/getting-started/install

### Visual Studio Code

https://code.visualstudio.com/

### PyCharm Community Edition

https://www.jetbrains.com/pycharm/

### IntelliJ Community Edition (Optional)

https://www.jetbrains.com/idea/download/other.html

### Docker

https://docs.docker.com/engine/install/


#### Windows Installation via chocolatey

Eine Powershell starten und folgenden Befehl ausführen:

```Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))```

Danach die Tools installieren:

```powershell
choco install python311
choco install zulu17
choco install nodejs
choco install yarn
choco install vscode
choco install pycharm-community
choco install docker-desktop
choco install intellijidea-community
pip install fastapi-code-generator
```

## Aufgaben

### 1. Prompt Engineering

- Experimente durchführen auf https://chat.openai.com/, um herauszufinden, wie man das System zur Vorbereitung auf
Klassenarbeiten einsetzen kann.
- Notizen machen, was funktioniert hat und was nicht.

### 2. API definieren

- API in [./api/assistant-api.yaml](./api/assistant-api.yaml) erweitern, damit die nötigen Daten ans Backend übermitteln
  werden können
- `gradlew generateServiceApi` ausführen und die API in [./service](./service) testen: http://localhost:8000/docs

### 3. Konversation erstellen

- Prompt-Notizen aus Aufgabe 1 verwenden, um [./service/code/services.py](./service/code/services.py) und
  [./service/code/openai_integration.py](./service/code/openai_integration.py) so zu erweitern, dass die gleichen Informationen
  wie in Aufgabe 1 abgerufen werden. 
- Antworten sammeln und in Datenstruktur von API übertragen

### 4. UI Arbeit

- `gradlew generateFrontendApi` ausführen, um die API für das Frontend zu erzeugen.
- [./ui](./ui) in Visual Studio Code öffnen und starten
- UI so erweitern, dass sie über die API mit unserem Service reden kann

### 5. Docker Images

- `gradlew buildServiceImage` und `gradlew buildUiImage` ausführen
- `docker-compose up` benutzen
