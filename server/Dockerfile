FROM openjdk:21-jdk-slim AS build

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests
RUN ls -l /app/target

FROM openjdk:21-jdk-slim

WORKDIR /app

COPY --from=build /app/target/mentormate-server-0.0.1-SNAPSHOT.jar demo.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "demo.jar"]
