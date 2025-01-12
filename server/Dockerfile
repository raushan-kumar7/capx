# Use Maven with JDK 21 for the build stage
FROM maven:3.8.5-openjdk-21 AS build

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