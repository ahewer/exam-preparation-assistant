
val serviceDir = "$projectDir/service"
val uiDir = "$projectDir/ui"
val apiDir = file("$projectDir/api")
val serviceImageName = "exam-preparation-assistant-service:latest"
val uiImageName = "exam-preparation-assistant-ui:latest"

/*
 * Dieser Task benutzt die API Beschreibung, um eine API für unser Backend zu erzeugen
 */
tasks.register("generateServiceApi") {
    group = "assistant"
    doLast{
        exec{
            commandLine(("fastapi-codegen --input assistant-api.yaml --template-dir templates " +
                    "--output $serviceDir/code --model-file controller_models.py").split(" "))
            workingDir = apiDir
        }
    }
}

/*
 * Dieser Task generiert einen API-Client für unser Frontend, der mit dem Backend kommunizieren kann.
 */
tasks.register("generateUiApi") {
    group = "assistant"
    doLast{
        exec{
            commandLine(("openapi-generator-cli generate -g typescript-axios -i assistant-api.yaml " +
                    "-o $uiDir/src/api-client -c $uiDir/openapi-config.json").split(" "))
            workingDir = apiDir
        }
    }
}

/*
 * Generiert das Docker-Image für unser Backend.
 */
tasks.register("buildServiceImage") {
    group = "assistant"
    doLast{
        exec {
            commandLine("docker build --tag $serviceImageName .".split(" "))
            workingDir(serviceDir)
        }
    }
}

/*
 * Generiert das Docker-Image für unser Frontend.
 */
tasks.register("buildUiImage") {
    group = "assistant"
    doLast{
        exec {
            commandLine("docker build --tag $uiImageName .".split(" "))
            workingDir(uiDir)
        }
    }
}
