# Build stage: Use OpenJDK 21 and install Maven
FROM openjdk:21-jdk-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Install Maven
RUN apt-get update && apt-get install -y maven

# Copy the Maven project files into the container
COPY pom.xml .
COPY src ./src

# Build the application (skip tests for faster build)
RUN mvn clean package -DskipTests

# Debugging: List files in the target directory
RUN ls -l /app/target

# Runtime stage: Use OpenJDK 21 for running the app
FROM openjdk:21-jdk-slim

# Set the working directory inside the container for the runtime image
WORKDIR /app

# Copy the built JAR file from the build stage to the runtime stage
COPY --from=build /app/target/mentormate-server-0.0.1-SNAPSHOT.jar demo.jar

# Expose the application port
EXPOSE 8080

# Set the entry point to run the JAR file
ENTRYPOINT ["java", "-jar", "demo.jar"]