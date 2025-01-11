package com.raushan.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.raushan.server.responses.ApiError;
import com.raushan.server.responses.ApiResponse;
import com.raushan.server.services.CryptoService;

@RestController
@RequestMapping("/api/v1/crypto")
public class CryptoController {

  @Autowired
  private CryptoService cryptoService;

  @GetMapping("/daily-stock-price")
  public ResponseEntity<ApiResponse> getDailyStockPrice(@RequestParam String from, @RequestParam String to, @RequestParam String date) {
    try {
      Object res = cryptoService.getDailyStockPrice(from, to, date);
      return ResponseEntity.ok(new ApiResponse(true, "Data fetched successfully", res));
    } catch (Exception e) {
      return ResponseEntity.status(500).body(new ApiError("Failed to fetch data", e.getMessage()));
    }
  }
}