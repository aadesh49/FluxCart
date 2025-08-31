package com.aadesh.FluxCart.controller;

import com.aadesh.FluxCart.io.CategoryRequest;
import com.aadesh.FluxCart.io.CategoryResponse;
import com.aadesh.FluxCart.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponse addCategory(@RequestBody CategoryRequest category){
        return categoryService.add(category);
    }

}
