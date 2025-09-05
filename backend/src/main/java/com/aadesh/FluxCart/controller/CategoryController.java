package com.aadesh.FluxCart.controller;

import com.aadesh.FluxCart.io.CategoryRequest;
import com.aadesh.FluxCart.io.CategoryResponse;
import com.aadesh.FluxCart.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;

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

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CategoryResponse> fetchAllCategories(){
        return categoryService.fetch();
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{categoryId}")
    public void deleteCategory(@PathVariable String categoryId){
        try{
            categoryService.delete(categoryId);
        }catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found for id: " + categoryId);
        }
    }

    @PatchMapping("/{categoryId}")
    public CategoryResponse updateCategory(@PathVariable String categoryId, @RequestBody Map<String, Object> updates){
        return categoryService.update(categoryId, updates);
    }
}
