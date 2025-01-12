# Use the latest Maven image with JDK 17 and manually install JDK 21
FROM maven:3.8.5-openjdk-17 AS build

# Install JDK 21 manually
RUN apt-get update && apt-get install -y openjdk-21-jdk && \
    update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-21-openjdk-amd64/bin/java 1 && \
    update-alternatives --set java /usr/lib/jvm/java-21-openjdk-amd64/bin/java

# Set the working directory
WORKDIR /app

# Copy all project files into the container
COPY . .

# Run Maven to build the project and skip tests
RUN mvn clean package -DskipTests

# Use the JDK 21 runtime for the application
FROM openjdk:21-jdk-slim

# Copy the JAR file from the build stage to the runtime stage
COPY --from=build /app/target/mentormate-server-0.0.1-SNAPSHOT.jar demo.jar

# Expose the application port
EXPOSE 8080

# Set the command to run the JAR file
ENTRYPOINT ["java", "-jar", "demo.jar"]
