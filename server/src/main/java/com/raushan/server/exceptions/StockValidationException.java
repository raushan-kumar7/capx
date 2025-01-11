package com.raushan.server.exceptions;

public class StockValidationException extends RuntimeException {
  public StockValidationException(String message) {
    super(message);
  }
}
