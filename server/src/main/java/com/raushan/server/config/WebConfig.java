package com.raushan.server.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.lang.NonNull;  // Import NonNull annotation

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${cors.local.url}")
    private String corsLocalUrl;

    @Value("${cors.deploy.url}")
    private String corsDeployUrl;

    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/**")
<<<<<<< HEAD
            .allowedOrigins(corsLocalUrl, corsDeployUrl)
            .allowedHeaders("*")
=======
            .allowedOrigins("https://capx-7oin.onrender.com")
            //.allowedOrigins("http://localhost:5173")
>>>>>>> 1cfe6b86f7519058d908f612e319c5b1fb9307f1
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowCredentials(true);
    }
}
